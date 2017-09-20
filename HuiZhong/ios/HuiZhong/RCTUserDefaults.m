//
//  RCTUserDefaults.m
//  HuiZhong
//
//  Created by 高天一 on 2017/9/18.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTUserDefaults.h"

@implementation RCTUserDefaults

RCT_EXPORT_MODULE()

//这里就是获取userdefaults中存储的值，但是只保留了获取，而且只是从standardUserDefaults中获取的
RCT_EXPORT_METHOD(getObject:(NSString *)key callBack:(RCTResponseSenderBlock)cb){

  NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
//     = []
  NSString *result = [userDefaults stringForKey:key];
  
  if(result){
    cb(@[result]); //找到了就返回
  }else{
    cb(@[@NO]);//没找到
   }
  
}

@end
