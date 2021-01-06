import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.css']
})
export class TwitchComponent implements OnInit {

  @Input() twitchProperties: object;

  @ViewChild('twitch') el: ElementRef;

  constructor() { }

  ngOnInit(): void {

    var js = document.createElement("script");
		js.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
		document.getElementsByTagName("body").item(0).appendChild(js);

		var jsmain = document.createElement("script");
		jsmain.innerHTML= 'var embed = new Twitch.Embed("twitch-embed", ' + this.twitchProperties + ' );';
		document.getElementsByTagName("body").item(0).appendChild(jsmain);

		var jsmain2 = document.createElement("script");
		jsmain2.innerHTML= `
			embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
				var player = embed.getPlayer();
				player.play();
			});
		`;
		document.getElementsByTagName("body").item(0).appendChild(jsmain2);

  }

}
