//
//  Controller.swift
//  rnhealthkit
//
//  Created by Alfonso Enriquez-Castro on 10/23/20.
//

import Foundation
import HealthKit
import Combine

@objc(Controller)
class Controller: NSObject {

  let healthStore = HKHealthStore()
  
  // Request authorization to access HealthKit.
  @objc
  func requestAuthorization() {
      let typesToShare: Set = [
          HKQuantityType.workoutType()
      ]
      let typesToRead: Set = [
          HKObjectType.workoutType(),
      ]
      
      // Request authorization for those quantity types.
      healthStore.requestAuthorization(toShare: typesToShare, read: typesToRead) { (success, error) in
          // Handle error.
      }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
