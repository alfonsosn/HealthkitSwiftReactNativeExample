//
//  Controller.m
//  rnhealthkit
//
//  Created by Alfonso Enriquez-Castro on 10/23/20.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Controller, NSObject)

RCT_EXTERN_METHOD(requestAuthorization)

RCT_EXTERN_METHOD(createHKWorkout:(NSString*)activityType
                  startDate:(NSDate*)startDate
                    endDate:(NSDate*)endDate
          totalEnergyBurned:(NSNumber*)totalEnergyBurned
              totalDistance:(NSNumber*)totalDistance
               distanceUnit:(NSString *)distanceUnit
                   metadata:(NSDictionary*)metadata
                  resolver:(RCTPromiseResolveBlock)resolve 
                  rejecter:(RCTPromiseRejectBlock)reject)

@end

