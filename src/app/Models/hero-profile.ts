import { receiveMessageOnPort } from 'worker_threads';
import { Iprofile } from './iprofile';

export class HeroProfile {
    private _herodata : Iprofile

    public get Name() : string {return this._herodata.name;}

    public get Gender() : string {return this._herodata.appearence.gender;}

    constructor (data:Iprofile) {
        this._herodata = data ;
    }

    public sendMessage (message:string,receiver:HeroProfile) : void {
        receiver.receiverMessage(message,this) ;
    }
    public receiverMessage (message:string,sender:HeroProfile) : void {
        console.log(`${sender.Name}:${message}`)
    }
}
