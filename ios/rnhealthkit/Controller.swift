
//  Controller.swift
//  rnhealthkit

import Foundation
import HealthKit

@objc(Controller)
class Controller: NSObject {

  let healthStore = HKHealthStore()
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}

