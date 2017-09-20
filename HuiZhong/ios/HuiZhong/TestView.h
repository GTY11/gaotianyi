//
//  TestView.h
//  HuiZhong
//
//  Created by 高天一 on 2017/9/12.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "GBTopLineView.h"
//引入头文件需注意
#import <React/RCTComponent.h>
#import <React/UIView+React.h>
#import <React/RCTBridge.h>


@interface TestView : GBTopLineView

@property (nonatomic,copy) RCTBubblingEventBlock onClickBanner;
//@property (nonatomic,copy) RCTBubblingEventBlock



@end
