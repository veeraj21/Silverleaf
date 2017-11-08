export class Event {
  $key: string;
  eventName:string;
  eventDesc:string;
  location:string;
  url:string;
  onDate:string;
  createdBy:string;
  createdAt = (new Date()).toString();

  public static log(){
    console.log("welcome");
  }

}

 
