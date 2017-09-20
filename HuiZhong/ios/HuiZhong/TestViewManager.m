//
//  TestViewManager.m
//  HuiZhong
//
//  Created by 高天一 on 2017/9/13.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestViewManager.h"


#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>


@interface TestViewManager()<RCTBridgeModule>


@end

@implementation TestViewManager


RCT_EXPORT_MODULE()


RCT_EXPORT_VIEW_PROPERTY(hotArray, NSMutableArray)

RCT_EXPORT_METHOD (doSomething:(NSArray *)array){
  NSLog(@"%@",array);
  
  NSMutableArray *array1 = [[NSMutableArray alloc] initWithArray:array];
  
   [self.testView setVerticalShowDataArr:array1];
}

- (UIView *)view{
  
  self.testView = [[TestView alloc] initWithFrame:CGRectZero];
   //
  return self.testView;
  
}


- (NSArray *)customDirectEventTypes{
  return @[@"start"];
}








@end
