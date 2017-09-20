//
//  RNMapManger.m
//  HuiZhong
//
//  Created by 高天一 on 2017/9/12.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNMapManger.h"
#import "GBTopLineView.h"
#import <MapKit/MapKit.h>

@implementation RNMapManger

RCT_EXPORT_MODULE()
- (UIView *)view{
  return [[MKMapView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled,BOOL)
RCT_CUSTOM_VIEW_PROPERTY(region,MKCoordinateRegion,RNMapManger){
 
}

@end
