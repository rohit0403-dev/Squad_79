// Progression 1: SmartPhone
class SmartPhone {
  constructor(ram, batteryPower, price) {
    this.ram = ram;
    this.batteryPower = batteryPower;
    this.price = price;
  }

  displayFeatures() {
    // TODO: Return a string containing ram, batteryPower, and price values separated by a newline character
    let ans = this.ram + "\n" + this.batteryPower + "\n" + this.price;
    return ans;
  }

  remainingAmount(priceIHave) {
    this.price = this.price - priceIHave;

    // TODO: Deduct the priceIHave from the price and update the price value
  }
}

// Progression 2: AndroidPhone
class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = modelName;
    // TODO: Use the super() method to inherit properties from SmartPhone
    // TODO: Initialize the modelName property specific to AndroidPhone
  }

  displayFeatures() {
    // TODO: Return a string containing modelName, ram, batteryPower, and price values separated by a newline character
    let ans = `${this.modelName}\n${this.ram}\n${this.batteryPower}\n${this.price}`;
    return ans;
  }

  remainingAmount(priceIHave) {

    let remaining = this.price - priceIHave;
    let ans = `Customer has remaining Rs.${remaining} after buying the android phone`;
    return ans;

    // TODO: Deduct priceIHave from the price and return:
    // - "Customer has no more amount" if the remaining price is <= 0
    // - A message showing the remaining amount if price > 0
  }
}

// Progression 3: IPhone
class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.seriesName = seriesName;
    // TODO: Use the super() method to inherit properties from SmartPhone
    // TODO: Initialize the seriesName property specific to IPhone
  }

  displayFeatures() {
    let ans = `${this.seriesName}\n${this.ram}\n${this.batteryPower}\n${this.price}`;
    return ans;
    // TODO: Return a string containing seriesName, ram, batteryPower, and price values separated by a newline character
  }

  remainingAmount(priceIHave) {
    // TODO: Check if priceIHave is less than the price:
    // - If yes, return "Customer can't able to buy a phone due to insufficient amount"
    // - Otherwise, deduct priceIHave from price and return:
    //   - "Customer has no more amount" if the remaining price is <= 0
    //   - A message showing the remaining amount if price > 0
 if(this.price>priceIHave){
  let ans="Customer can't able to buy a phone due to insufficient amount";
  return ans;
 }
 let remain=priceIHave-this.price;
 if(remain>=0){
  let ans="Customer has no more amount";
  return ans;
 }

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
