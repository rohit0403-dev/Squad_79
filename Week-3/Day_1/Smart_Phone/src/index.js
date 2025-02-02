// Progression 1: SmartPhone
class SmartPhone {
    constructor(ram, batteryPower, price) {
        this.ram=ram;
        this.batteryPower=batteryPower;
        this.price=price;
      // TODO: Initialize the properties ram, batteryPower, and price
    }
  
    displayFeatures() {
        let ans=this.ram+"\n"+this.batteryPower+"\n"+this.price;
       return ans;
      // TODO: Return a string containing ram, batteryPower, and price values separated by a newline character
    }
  
    remainingAmount(priceIHave) {

        this.price=this.price-priceIHave;
      // TODO: Deduct the priceIHave from the price and update the price value
    }
  }
  
  // Progression 2: AndroidPhone
  class AndroidPhone extends SmartPhone {
    constructor(modelName, ram, batteryPower, price) {
        super(ram,batteryPower,price)
        this.modelName=modelName;
      // TODO: Use the super() method to inherit properties from SmartPhone
      // TODO: Initialize the modelName property specific to AndroidPhone
    }
  
    displayFeatures() {
        let ans=this.modelName+"\n"+this.ram+"\n"+this.batteryPower+"\n"+this.price;
        return ans;
      // TODO: Return a string containing modelName, ram, batteryPower, and price values separated by a newline character
    }
  
    remainingAmount(priceIHave) {

        let ans=this.price-priceIHave;
        let line=`Customer has remaining Rs.${ans} after buying the android phone`
        return line;

      // TODO: Deduct priceIHave from the price and return:
      // - "Customer has no more amount" if the remaining price is <= 0
      // - A message showing the remaining amount if price > 0
    }
  }
  
  // Progression 3: IPhone
  class IPhone extends SmartPhone {
    constructor(seriesName, ram, batteryPower, price) {
        super(ram,batteryPower,price)
        this.seriesName=seriesName;
      // TODO: Use the super() method to inherit properties from SmartPhone
      // TODO: Initialize the seriesName property specific to IPhone
    }
  
    displayFeatures() {
      // TODO: Return a string containing seriesName, ram, batteryPower, and price values separated by a newline character
    }
  
    remainingAmount(priceIHave) {
        console.log(priceIHave,"I")
        console.log(this.price,"P")
        if(this.price>priceIHave){
            return "Customer can't able to buy a phone due to insufficient amount"
        }
        else if(this.price<priceIHave){
            return "Customer has no more amount"
        }
      // TODO: Check if priceIHave is less than the price:
      // - If yes, return "Customer can't able to buy a phone due to insufficient amount"
      // - Otherwise, deduct priceIHave from price and return:
      //   - "Customer has no more amount" if the remaining price is <= 0
      //   - A message showing the remaining amount if price > 0
    }
  }
  
  // Progression 4: MobileCampus
  class MobileCampus {
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
      // TODO: Initialize the properties NoOfMobiles, NoOfAndroidMobiles, and NoOfIPhoneMobiles
    }
  
    changeMobileAvailabilityNumber(count, type) {
      // TODO: Deduct the count from NoOfAndroidMobiles if type is "android"
      // TODO: Deduct the count from NoOfIPhoneMobiles if type is "iphone"
      // Return the updated availability message for the respective type
    }
  }
  