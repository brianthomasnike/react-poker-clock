!function(t,e) {
	"object"==typeof exports&&"object"==typeof module?
		module.exports=e(require("react")):"function"==typeof define&&define.amd?
			define(["react"],e):"object"==typeof exports?exports.ReactCountdownClock=e(require("react"))
			:t.ReactCountdownClock=e(t.React)
}
	(this,function(t){
		return function(t){
			function e(i){
				if(s[i])return s[i].exports;var n=s[i]={
					exports:{},id:i,loaded:!1
				};
				return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports
			}
			var s={};
			return e.m=t,e.c=s,e.p="/build/",e(0)
	}
	([function(t,e,s){
		var i;i=s(1),t.exports=i.createClass({
			_seconds:0,
			_radius:null,
			_fraction:null,
			_content:null,
			_canvas:null,
			_timeoutIds:[],
			displayName:"ReactCountdownClock",
			propTypes:{
				seconds:i.PropTypes.number,
				size:i.PropTypes.number,
				weight:i.PropTypes.number,
				color:i.PropTypes.string,
				fontSize:i.PropTypes.string,
				font:i.PropTypes.string,
				alpha:i.PropTypes.number,
				timeFormat:i.PropTypes.string,
				onComplete:i.PropTypes.func,
				//onPause:i.PropTypes.func,
				showMilliseconds:i.PropTypes.bool,
				start:i.PropTypes.bool,
				reset:i.PropTypes.bool
			},
			getDefaultProps:function(){
				return{
					seconds:60,
					size:300,
					color:"#077202",
					alpha:1,
					timeFormat:"hms",
					fontSize:"auto",
					font:"Arial",
					showMilliseconds:!0,
					start:true,
					reset:false
				}
			},
			componentWillReceiveProps:function(t){
				return this._seconds=t.seconds,
				this._setupTimer()
			},
			componentDidMount:function(){
				return this._seconds=this.props.seconds+.5,
				this._setupTimer()
			},
			componentWillUnmount:function(){
				return this._cancelTimer()
			},
			_setupTimer:function(){
				return this._setScale(),
				this._setupCanvas(),
				this._drawTimer(),
				this._startTimer()
			},
			_updateCanvas:function(){
				return this._clearTimer(),
				this._drawTimer()
			},
			_setScale:function(){
				return this._radius=this.props.size/2,
				this._fraction=2/this.props.seconds,
				this._tickPeriod=this._calculateTick(),
				this._innerRadius=this.props.weight?this._radius-this.props.weight:this._radius/1.8
			},
			_calculateTick:function(){
				var t,e;
				return e=.2,
				t=this._seconds*e,
				t>1e3?1e3:t
			},
			_setupCanvas:function(){
				return this._canvas=this.refs.canvas,
				this._context=this._canvas.getContext("2d"),
				this._context.textAlign="center",
				this._context.textBaseline="middle"
			},
			_startTimer:function(){
				return this._timeoutIds.push(setTimeout(function(t){
					return function(){
						return t._tick()
					}
				}(this),200))
			},
			_cancelTimer:function(){
				var t,e,s,i,n;
				for(s=this._timeoutIds,i=[],t=0,e=s.length;t<e;t++)n=s[t],i.push(clearTimeout(n));
					return i
			},
			_tick:function(){
				var t;
				this._setRemainingSeconds(this);
				if(this.props.start)
				return t=Date.now(),
				this._timeoutIds.push(setTimeout(
					function(e){
						return function(){
							var s;
							return s=(Date.now()-t)/1e3,
							e._seconds-=s,
							e._seconds<=0?(e._seconds=0,
								e._handleComplete(),
								//e._clearTimer(),
								e._updateCanvas()):(e._updateCanvas(),
								e._tick())
							}
					}(this),this._tickPeriod))
			},
			_handleComplete:function(){
				this._seconds = this.props.seconds;
				if(this.props.onComplete)return(this.props.onComplete(),
				this._setupTimer())
			},
			_setRemainingSeconds:function(e){
				if(e.props.reset) {
					return this.props.onPause(this.props.seconds),
					e._seconds=0,
					e._handleComplete(),
					e._updateCanvas()
				} else {
					return this.props.onPause(e._seconds)
				}
			},
			_clearTimer:function(){
				return this._context.clearRect(0,0,this._canvas.width,this._canvas.height),
				this._drawBackground()
			},
			_drawBackground:function(){
				return this._context.beginPath(),
				this._context.globalAlpha=this.props.alpha/3,
				this._context.arc(this._radius,this._radius,this._radius,0,2*Math.PI,!1),
				this._context.arc(this._radius,this._radius,this._innerRadius,2*Math.PI,0,!0),
				this._context.fill()
			},
			_formattedTime:function(){
				var t,hours,mins,i,secs,o;
				return t=null!=(i=this._seconds<=9.9&&this.props.showMilliseconds)?i:{1:0},
				"hms"===this.props.timeFormat?(
					hours=parseInt(this._seconds/3600)%24,
					mins=parseInt(this._seconds/60)%60,
					secs=parseInt(this._seconds%60),
					hours<10&&(hours="0"+hours),
					mins<10&&(mins="0"+mins),
					secs<10&&(secs="0"+secs),
					o=[],hours>0&&o.push(hours),mins>0&&o.push(mins),
					o.push(secs),o.join(":")):this._seconds.toFixed(t)
			},
			_fontSize:function(t){
				var e,s;return"auto"===this.props.fontSize?(e=function(){
					switch(t.length){
						case 11:return 4.0;
						case 8:return 2.4;
						case 5:return 1.5;
						case 2:return .8;
						default:return .7
					}
				}(),
				s=this._radius/e,s+"px"):this.props.fontSize
			},
			_drawTimer:function(){
				var t,e;
				return e=this._fraction*this._seconds+1.5,
				t=this._formattedTime(),
				this._context.globalAlpha=this.props.alpha,
				this._seconds<=11?(this._context.fillStyle="#e00"):
					this._seconds<=60?(this._context.fillStyle="#FF7500"):
						(this._context.fillStyle=this.props.color),
				this._context.font="bold "+this._fontSize(t)+" "+this.props.font,
				this._context.fillText(t,this._radius,this._radius),
				this._context.beginPath(),
				this._context.arc(this._radius,this._radius,this._radius,1.5*Math.PI,Math.PI*e,!1),
				this._context.arc(this._radius,this._radius,this._innerRadius,Math.PI*e,1.5*Math.PI,!0),
				this._context.fill()
			},
			render:function(){
				return i.createElement("canvas",{
					ref:"canvas",
					className:"react-countdown-clock",
					width:this.props.size,
					height:this.props.size
				})
			}
		})
},
function(e,s){e.exports=t}])
});
