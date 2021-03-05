import Constants from '../config/constants'
import PineholeSceneBase from '../transitions/pinholeSceneBase'
import { utils } from '../utils/utils'

export default class ResultScene extends PineholeSceneBase {
  constructor() {
    super(Constants.SCENES.RESULT)
  }
  preload() {
    super.preload()
    this.cameras.main.setBackgroundColor(0x000000)
  }
  create() {
    super.create()

    // console.log(utils.GetSessionStorageItem(Constants.SESSION_STORAGE.GAME_TIMER));
    // console.log(utils.GetSessionStorageItem(Constants.SESSION_STORAGE.GAME_SCORE));
    // console.log(utils.GetSessionStorageItem(Constants.SESSION_STORAGE.GAME_TIMER_FORMATTED));

    this.events.on(Phaser.Scenes.Events.TRANSITION_COMPLETE, () => {
      this.time.delayedCall(2000, () => {
        if (this.global.settings.getGame('debugMode')) {
          alert('go to result page')
        } else {
          //@ts-ignore
          var stringFn = /*"console.log('mee');"*/this.global.settings.getAPI('stringFn');
          var fn = `function (){ ${stringFn}}`;
          var executeByString = new Function("return (" + fn + ")")();
          executeByString();
        }
      })
    })
  }
}