import {
  NzTimePickerModule,
  NzTimePickerPanelComponent
} from "./chunk-GCXOJAIT.js";
import {
  DateHelperService,
  NzI18nService
} from "./chunk-F6CNTIGM.js";
import {
  CandyDate,
  cloneDate,
  normalizeRangeValue,
  wrongSortOrder
} from "./chunk-KPERYUST.js";
import {
  NzResizeObserver
} from "./chunk-PL4LX5OB.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-7B4DM54X.js";
import {
  DATE_PICKER_POSITION_MAP,
  DEFAULT_DATE_PICKER_POSITIONS,
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-6LK6YEN4.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-INLIGI3K.js";
import {
  NzWaveDirective
} from "./chunk-DUINLRZV.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin
} from "./chunk-IK4A3WT3.js";
import {
  ESCAPE
} from "./chunk-27BDGVS6.js";
import {
  NzDestroyService
} from "./chunk-IYZFKAIE.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-B3VXJALR.js";
import {
  Platform
} from "./chunk-W64RHMF7.js";
import {
  NzNoAnimationDirective
} from "./chunk-FF7VI4RK.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-FMYHVPAI.js";
import {
  slideMotion
} from "./chunk-JG2757XN.js";
import {
  Directionality
} from "./chunk-ZRUYH7ST.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-GTSJRTPY.js";
import {
  InputBoolean,
  getStatusClassNames,
  isNonEmptyString,
  isTemplateRef,
  toBoolean,
  valueFunctionProp
} from "./chunk-XQRYCNDM.js";
import {
  NzTransitionPatchDirective
} from "./chunk-TGLOQCUB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-MEBHTELF.js";
import {
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-JDFXT26M.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ReplaySubject,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation$1,
  __decorate,
  distinctUntilChanged,
  forwardRef,
  fromEvent,
  map,
  merge,
  of,
  setClassMetadata,
  takeUntil,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate4,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BFZJAOQL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-date-picker.mjs
function CalendarFooterComponent_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CalendarFooterComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CalendarFooterComponent_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.extraFooter);
  }
}
function CalendarFooterComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r0.extraFooter, ɵɵsanitizeHtml);
  }
}
function CalendarFooterComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CalendarFooterComponent_Conditional_1_Conditional_1_Template, 1, 1, "ng-container")(2, CalendarFooterComponent_Conditional_1_Conditional_2_Template, 1, 1, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-footer-extra");
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.isExtraFooterTemplateRef ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.isExtraFooterNonEmptyString ? 2 : -1);
  }
}
function CalendarFooterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function CalendarFooterComponent_Conditional_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.isTodayDisabled ? null : ctx_r0.onClickToday());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-today-btn ", ctx_r0.isTodayDisabled ? ctx_r0.prefixCls + "-today-btn-disabled" : "", "");
    ɵɵpropertyInterpolate("title", ctx_r0.todayTitle);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.locale.today, " ");
  }
}
function CalendarFooterComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CalendarFooterComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "a", 4);
    ɵɵlistener("click", function CalendarFooterComponent_Conditional_3_Conditional_2_Template_a_click_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.isTodayDisabled ? null : ctx_r0.onClickToday());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-now");
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-now-btn");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.locale.now, " ");
  }
}
function CalendarFooterComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "button", 5);
    ɵɵlistener("click", function CalendarFooterComponent_Conditional_3_Conditional_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.okDisabled ? null : ctx_r0.clickOk.emit());
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-ok");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r0.okDisabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.locale.ok, " ");
  }
}
function CalendarFooterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, CalendarFooterComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 1)(2, CalendarFooterComponent_Conditional_3_Conditional_2_Template, 3, 7, "li")(3, CalendarFooterComponent_Conditional_3_Conditional_3_Template, 3, 5, "li");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-ranges");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.rangeQuickSelector);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.showNow ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(3, ctx_r0.hasTimePicker ? 3 : -1);
  }
}
function DecadeHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function DecadeHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(selector_r2.onClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    ɵɵclassMap(selector_r2.className);
    ɵɵpropertyInterpolate("title", selector_r2.title || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", selector_r2.label, " ");
  }
}
var _forTrack0 = ($index, $item) => $item.trackByIndex;
var _c0 = (a0) => ({
  $implicit: a0
});
function DecadeTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th", 2);
  }
}
function DecadeTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    ɵɵpropertyInterpolate("title", cell_r1.title);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r1.content, " ");
  }
}
function DecadeTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr", 1);
    ɵɵtemplate(2, DecadeTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 2);
    ɵɵrepeaterCreate(3, DecadeTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r1.showWeek ? 2 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.headRow);
  }
}
function DecadeTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", row_r3.weekNum, " ");
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", cell_r5.cellRender, ɵɵsanitizeHtml);
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    ɵɵattribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r5.content, " ");
  }
}
function DecadeTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DecadeTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, "ng-container")(1, DecadeTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 1, 1)(2, DecadeTableComponent_For_4_For_3_Case_1_Conditional_2_Template, 2, 6);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    ɵɵconditional(0, cell_r5.isTemplateRef ? 0 : cell_r5.isNonEmptyString ? 1 : 2);
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.fullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    ɵɵadvance();
    ɵɵtextInterpolate(cell_r5.content);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c0, cell_r5.value));
  }
}
function DecadeTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, DecadeTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, DecadeTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    ɵɵclassProp("ant-picker-calendar-date-today", cell_r5.isToday);
    ɵɵadvance();
    ɵɵconditional(1, cell_r5.fullCellRender ? 1 : 2);
  }
}
function DecadeTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function DecadeTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function DecadeTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.onMouseEnter());
    });
    ɵɵtemplate(1, DecadeTableComponent_For_4_For_3_Case_1_Template, 3, 1)(2, DecadeTableComponent_For_4_For_3_Case_2_Template, 3, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r5.title);
    ɵɵproperty("ngClass", cell_r5.classMap);
    ɵɵadvance();
    ɵɵconditional(1, (tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function DecadeTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 4);
    ɵɵtemplate(1, DecadeTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    ɵɵrepeaterCreate(2, DecadeTableComponent_For_4_For_3_Template, 3, 3, "td", 5, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    ɵɵproperty("ngClass", row_r3.classMap);
    ɵɵadvance();
    ɵɵconditional(1, row_r3.weekNum ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(row_r3.dateCells);
  }
}
function YearHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function YearHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(selector_r2.onClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    ɵɵclassMap(selector_r2.className);
    ɵɵpropertyInterpolate("title", selector_r2.title || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", selector_r2.label, " ");
  }
}
function YearTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th", 2);
  }
}
function YearTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    ɵɵpropertyInterpolate("title", cell_r1.title);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r1.content, " ");
  }
}
function YearTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr", 1);
    ɵɵtemplate(2, YearTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 2);
    ɵɵrepeaterCreate(3, YearTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r1.showWeek ? 2 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.headRow);
  }
}
function YearTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", row_r3.weekNum, " ");
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, YearTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", cell_r5.cellRender, ɵɵsanitizeHtml);
  }
}
function YearTableComponent_For_4_For_3_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    ɵɵattribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r5.content, " ");
  }
}
function YearTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, YearTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, "ng-container")(1, YearTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 1, 1)(2, YearTableComponent_For_4_For_3_Case_1_Conditional_2_Template, 2, 6);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    ɵɵconditional(0, cell_r5.isTemplateRef ? 0 : cell_r5.isNonEmptyString ? 1 : 2);
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, YearTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.fullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function YearTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, YearTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    ɵɵadvance();
    ɵɵtextInterpolate(cell_r5.content);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c0, cell_r5.value));
  }
}
function YearTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, YearTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, YearTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    ɵɵclassProp("ant-picker-calendar-date-today", cell_r5.isToday);
    ɵɵadvance();
    ɵɵconditional(1, cell_r5.fullCellRender ? 1 : 2);
  }
}
function YearTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function YearTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function YearTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.onMouseEnter());
    });
    ɵɵtemplate(1, YearTableComponent_For_4_For_3_Case_1_Template, 3, 1)(2, YearTableComponent_For_4_For_3_Case_2_Template, 3, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r5.title);
    ɵɵproperty("ngClass", cell_r5.classMap);
    ɵɵadvance();
    ɵɵconditional(1, (tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function YearTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 4);
    ɵɵtemplate(1, YearTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    ɵɵrepeaterCreate(2, YearTableComponent_For_4_For_3_Template, 3, 3, "td", 5, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    ɵɵproperty("ngClass", row_r3.classMap);
    ɵɵadvance();
    ɵɵconditional(1, row_r3.weekNum ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(row_r3.dateCells);
  }
}
function MonthHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function MonthHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(selector_r2.onClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    ɵɵclassMap(selector_r2.className);
    ɵɵpropertyInterpolate("title", selector_r2.title || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", selector_r2.label, " ");
  }
}
function MonthTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th", 2);
  }
}
function MonthTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    ɵɵpropertyInterpolate("title", cell_r1.title);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r1.content, " ");
  }
}
function MonthTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr", 1);
    ɵɵtemplate(2, MonthTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 2);
    ɵɵrepeaterCreate(3, MonthTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r1.showWeek ? 2 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.headRow);
  }
}
function MonthTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", row_r3.weekNum, " ");
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MonthTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", cell_r5.cellRender, ɵɵsanitizeHtml);
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    ɵɵattribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r5.content, " ");
  }
}
function MonthTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MonthTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, "ng-container")(1, MonthTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 1, 1)(2, MonthTableComponent_For_4_For_3_Case_1_Conditional_2_Template, 2, 6);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    ɵɵconditional(0, cell_r5.isTemplateRef ? 0 : cell_r5.isNonEmptyString ? 1 : 2);
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MonthTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.fullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, MonthTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    ɵɵadvance();
    ɵɵtextInterpolate(cell_r5.content);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c0, cell_r5.value));
  }
}
function MonthTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MonthTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, MonthTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    ɵɵclassProp("ant-picker-calendar-date-today", cell_r5.isToday);
    ɵɵadvance();
    ɵɵconditional(1, cell_r5.fullCellRender ? 1 : 2);
  }
}
function MonthTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function MonthTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function MonthTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.onMouseEnter());
    });
    ɵɵtemplate(1, MonthTableComponent_For_4_For_3_Case_1_Template, 3, 1)(2, MonthTableComponent_For_4_For_3_Case_2_Template, 3, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r5.title);
    ɵɵproperty("ngClass", cell_r5.classMap);
    ɵɵadvance();
    ɵɵconditional(1, (tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function MonthTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 4);
    ɵɵtemplate(1, MonthTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    ɵɵrepeaterCreate(2, MonthTableComponent_For_4_For_3_Template, 3, 3, "td", 5, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    ɵɵproperty("ngClass", row_r3.classMap);
    ɵɵadvance();
    ɵɵconditional(1, row_r3.weekNum ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(row_r3.dateCells);
  }
}
function DateHeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function DateHeaderComponent_For_7_Template_button_click_0_listener() {
      const selector_r2 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(selector_r2.onClick());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const selector_r2 = ctx.$implicit;
    ɵɵclassMap(selector_r2.className);
    ɵɵpropertyInterpolate("title", selector_r2.title || null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", selector_r2.label, " ");
  }
}
function DateTableComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "th", 2);
  }
}
function DateTableComponent_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r1 = ctx.$implicit;
    ɵɵpropertyInterpolate("title", cell_r1.title);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r1.content, " ");
  }
}
function DateTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr", 1);
    ɵɵtemplate(2, DateTableComponent_Conditional_1_Conditional_2_Template, 1, 0, "th", 2);
    ɵɵrepeaterCreate(3, DateTableComponent_Conditional_1_For_4_Template, 2, 2, "th", 2, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r1.showWeek ? 2 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.headRow);
  }
}
function DateTableComponent_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-week");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", row_r3.weekNum, " ");
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateTableComponent_For_4_For_3_Case_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", cell_r5.cellRender, ɵɵsanitizeHtml);
  }
}
function DateTableComponent_For_4_For_3_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-cell-inner");
    ɵɵattribute("aria-selected", cell_r5.isSelected)("aria-disabled", cell_r5.isDisabled);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", cell_r5.content, " ");
  }
}
function DateTableComponent_For_4_For_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateTableComponent_For_4_For_3_Case_1_Conditional_0_Template, 1, 4, "ng-container")(1, DateTableComponent_For_4_For_3_Case_1_Conditional_1_Template, 1, 1)(2, DateTableComponent_For_4_For_3_Case_1_Conditional_2_Template, 2, 6);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    ɵɵconditional(0, cell_r5.isTemplateRef ? 0 : cell_r5.isNonEmptyString ? 1 : 2);
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateTableComponent_For_4_For_3_Case_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", cell_r5.fullCellRender)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, cell_r5.value));
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateTableComponent_For_4_For_3_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, DateTableComponent_For_4_For_3_Case_2_Conditional_2_ng_container_3_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-value");
    ɵɵadvance();
    ɵɵtextInterpolate(cell_r5.content);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date-content");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", cell_r5.cellRender)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c0, cell_r5.value));
  }
}
function DateTableComponent_For_4_For_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, DateTableComponent_For_4_For_3_Case_2_Conditional_1_Template, 1, 4, "ng-container")(2, DateTableComponent_For_4_For_3_Case_2_Conditional_2_Template, 4, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-date ant-picker-cell-inner");
    ɵɵclassProp("ant-picker-calendar-date-today", cell_r5.isToday);
    ɵɵadvance();
    ɵɵconditional(1, cell_r5.fullCellRender ? 1 : 2);
  }
}
function DateTableComponent_For_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function DateTableComponent_For_4_For_3_Template_td_click_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.isDisabled ? null : cell_r5.onClick());
    })("mouseenter", function DateTableComponent_For_4_For_3_Template_td_mouseenter_0_listener() {
      const cell_r5 = ɵɵrestoreView(_r4).$implicit;
      return ɵɵresetView(cell_r5.onMouseEnter());
    });
    ɵɵtemplate(1, DateTableComponent_For_4_For_3_Case_1_Template, 3, 1)(2, DateTableComponent_For_4_For_3_Case_2_Template, 3, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", cell_r5.title);
    ɵɵproperty("ngClass", cell_r5.classMap);
    ɵɵadvance();
    ɵɵconditional(1, (tmp_22_0 = ctx_r1.prefixCls) === "ant-picker" ? 1 : tmp_22_0 === "ant-picker-calendar" ? 2 : -1);
  }
}
function DateTableComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 4);
    ɵɵtemplate(1, DateTableComponent_For_4_Conditional_1_Template, 2, 4, "td", 5);
    ɵɵrepeaterCreate(2, DateTableComponent_For_4_For_3_Template, 3, 3, "td", 5, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    ɵɵproperty("ngClass", row_r3.classMap);
    ɵɵadvance();
    ɵɵconditional(1, row_r3.weekNum ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(row_r3.dateCells);
  }
}
function InnerPopupComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "decade-header", 0);
    ɵɵtwoWayListener("valueChange", function InnerPopupComponent_Case_2_Template_decade_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("panelModeChange", function InnerPopupComponent_Case_2_Template_decade_header_panelModeChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.panelModeChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_2_Template_decade_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.headerChange.emit($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div")(2, "decade-table", 1);
    ɵɵlistener("valueChange", function InnerPopupComponent_Case_2_Template_decade_table_valueChange_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChooseDecade($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("value", ctx_r1.activeDate);
    ɵɵproperty("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    ɵɵadvance();
    ɵɵproperty("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate);
  }
}
function InnerPopupComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "year-header", 0);
    ɵɵtwoWayListener("valueChange", function InnerPopupComponent_Case_3_Template_year_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("panelModeChange", function InnerPopupComponent_Case_3_Template_year_header_panelModeChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.panelModeChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_3_Template_year_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.headerChange.emit($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div")(2, "year-table", 2);
    ɵɵlistener("valueChange", function InnerPopupComponent_Case_3_Template_year_table_valueChange_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChooseYear($event));
    })("cellHover", function InnerPopupComponent_Case_3_Template_year_table_cellHover_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cellHover.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("value", ctx_r1.activeDate);
    ɵɵproperty("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    ɵɵadvance();
    ɵɵproperty("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
  }
}
function InnerPopupComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "month-header", 0);
    ɵɵtwoWayListener("valueChange", function InnerPopupComponent_Case_4_Template_month_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("panelModeChange", function InnerPopupComponent_Case_4_Template_month_header_panelModeChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.panelModeChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_4_Template_month_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.headerChange.emit($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div")(2, "month-table", 3);
    ɵɵlistener("valueChange", function InnerPopupComponent_Case_4_Template_month_table_valueChange_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChooseMonth($event));
    })("cellHover", function InnerPopupComponent_Case_4_Template_month_table_cellHover_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cellHover.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("value", ctx_r1.activeDate);
    ɵɵproperty("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    ɵɵadvance();
    ɵɵproperty("value", ctx_r1.value)("activeDate", ctx_r1.activeDate)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
  }
}
function InnerPopupComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "date-header", 4);
    ɵɵtwoWayListener("valueChange", function InnerPopupComponent_Case_5_Template_date_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("panelModeChange", function InnerPopupComponent_Case_5_Template_date_header_panelModeChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.panelModeChange.emit($event));
    })("valueChange", function InnerPopupComponent_Case_5_Template_date_header_valueChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.headerChange.emit($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "div")(2, "date-table", 5);
    ɵɵlistener("valueChange", function InnerPopupComponent_Case_5_Template_date_table_valueChange_2_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelectDate($event));
    })("cellHover", function InnerPopupComponent_Case_5_Template_date_table_cellHover_2_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cellHover.emit($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("value", ctx_r1.activeDate);
    ɵɵproperty("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("prev", "week") : ctx_r1.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("next", "week") : ctx_r1.enablePrevNext("next", "date"))("showPreBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("prev", "week") : ctx_r1.enablePrevNext("prev", "date"))("showNextBtn", ctx_r1.panelMode === "week" ? ctx_r1.enablePrevNext("next", "week") : ctx_r1.enablePrevNext("next", "date"));
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    ɵɵadvance();
    ɵɵproperty("locale", ctx_r1.locale)("showWeek", ctx_r1.showWeek)("value", ctx_r1.value)("activeDate", ctx_r1.activeDate)("disabledDate", ctx_r1.disabledDate)("cellRender", ctx_r1.dateRender)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue)("canSelectWeek", ctx_r1.panelMode === "week");
  }
}
function InnerPopupComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-time-picker-panel", 6);
    ɵɵlistener("ngModelChange", function InnerPopupComponent_Conditional_6_Template_nz_time_picker_panel_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelectTime($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r1.value == null ? null : ctx_r1.value.nativeDate)("format", ctx_r1.timeOptions.nzFormat)("nzHourStep", ctx_r1.timeOptions.nzHourStep)("nzMinuteStep", ctx_r1.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r1.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r1.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r1.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r1.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r1.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r1.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r1.timeOptions.nzUse12Hours)("nzAddOn", ctx_r1.timeOptions.nzAddOn);
  }
}
var _c1 = (a0) => ({
  partType: a0
});
var _c2 = () => ({
  partType: "left"
});
var _c3 = () => ({
  partType: "right"
});
function DateRangePopupComponent_Conditional_0_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateRangePopupComponent_Conditional_0_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const tplInnerPopup_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", tplInnerPopup_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, ctx_r0.datePickerService.activeInput));
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 4)(1, DateRangePopupComponent_Conditional_0_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const tplInnerPopup_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", tplInnerPopup_r2)("ngTemplateOutletContext", ɵɵpureFunction0(4, _c2));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tplInnerPopup_r2)("ngTemplateOutletContext", ɵɵpureFunction0(5, _c3));
  }
}
function DateRangePopupComponent_Conditional_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div");
    ɵɵelementStart(2, "div")(3, "div");
    ɵɵtemplate(4, DateRangePopupComponent_Conditional_0_Conditional_4_Template, 1, 4, "ng-container")(5, DateRangePopupComponent_Conditional_0_Conditional_5_Template, 2, 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, DateRangePopupComponent_Conditional_0_ng_container_6_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const tplFooter_r3 = ɵɵreference(5);
    ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");
    ɵɵadvance();
    ɵɵstyleMap(ctx_r0.arrowPosition);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-range-arrow");
    ɵɵadvance();
    ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-panel-container ", ctx_r0.showWeek ? ctx_r0.prefixCls + "-week-number" : "", "");
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panels");
    ɵɵadvance();
    ɵɵconditional(4, ctx_r0.hasTimePicker ? 4 : 5);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", tplFooter_r3);
  }
}
function DateRangePopupComponent_Conditional_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangePopupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 5);
    ɵɵtemplate(2, DateRangePopupComponent_Conditional_1_ng_container_2_Template, 1, 0, "ng-container", 3)(3, DateRangePopupComponent_Conditional_1_ng_container_3_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const tplInnerPopup_r2 = ɵɵreference(3);
    const tplFooter_r3 = ɵɵreference(5);
    ɵɵclassMapInterpolate4("", ctx_r0.prefixCls, "-panel-container ", ctx_r0.showWeek ? ctx_r0.prefixCls + "-week-number" : "", " ", ctx_r0.hasTimePicker ? ctx_r0.prefixCls + "-time" : "", " ", ctx_r0.isRange ? ctx_r0.prefixCls + "-range" : "", "");
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panel");
    ɵɵclassProp("ant-picker-panel-rtl", ctx_r0.dir === "rtl");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tplInnerPopup_r2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tplFooter_r3);
  }
}
function DateRangePopupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "inner-popup", 6);
    ɵɵlistener("panelModeChange", function DateRangePopupComponent_ng_template_2_Template_inner_popup_panelModeChange_1_listener($event) {
      const partType_r5 = ɵɵrestoreView(_r4).partType;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPanelModeChange($event, partType_r5));
    })("cellHover", function DateRangePopupComponent_ng_template_2_Template_inner_popup_cellHover_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onCellHover($event));
    })("selectDate", function DateRangePopupComponent_ng_template_2_Template_inner_popup_selectDate_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.changeValueFromSelect($event, !ctx_r0.showTime));
    })("selectTime", function DateRangePopupComponent_ng_template_2_Template_inner_popup_selectTime_1_listener($event) {
      const partType_r5 = ɵɵrestoreView(_r4).partType;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onSelectTime($event, partType_r5));
    })("headerChange", function DateRangePopupComponent_ng_template_2_Template_inner_popup_headerChange_1_listener($event) {
      const partType_r5 = ɵɵrestoreView(_r4).partType;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onActiveDateChange($event, partType_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const partType_r5 = ctx.partType;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-panel");
    ɵɵclassProp("ant-picker-panel-rtl", ctx_r0.dir === "rtl");
    ɵɵadvance();
    ɵɵproperty("showWeek", ctx_r0.showWeek)("endPanelMode", ctx_r0.getPanelMode(ctx_r0.endPanelMode, partType_r5))("partType", partType_r5)("locale", ctx_r0.locale)("showTimePicker", ctx_r0.hasTimePicker)("timeOptions", ctx_r0.getTimeOptions(partType_r5))("panelMode", ctx_r0.getPanelMode(ctx_r0.panelMode, partType_r5))("activeDate", ctx_r0.getActiveDate(partType_r5))("value", ctx_r0.getValue(partType_r5))("disabledDate", ctx_r0.disabledDate)("dateRender", ctx_r0.dateRender)("selectedValue", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.value)("hoverValue", ctx_r0.hoverValue);
  }
}
function DateRangePopupComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "calendar-footer", 7);
    ɵɵlistener("clickOk", function DateRangePopupComponent_ng_template_4_Conditional_0_Template_calendar_footer_clickOk_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onClickOk());
    })("clickToday", function DateRangePopupComponent_ng_template_4_Conditional_0_Template_calendar_footer_clickToday_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onClickToday($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const tplRangeQuickSelector_r7 = ɵɵreference(7);
    ɵɵproperty("locale", ctx_r0.locale)("isRange", ctx_r0.isRange)("showToday", ctx_r0.showToday)("showNow", ctx_r0.showNow)("hasTimePicker", ctx_r0.hasTimePicker)("okDisabled", !ctx_r0.isAllowed(ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.value))("extraFooter", ctx_r0.extraFooter)("rangeQuickSelector", ctx_r0.ranges ? tplRangeQuickSelector_r7 : null);
  }
}
function DateRangePopupComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateRangePopupComponent_ng_template_4_Conditional_0_Template, 1, 8, "calendar-footer");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.hasFooter ? 0 : -1);
  }
}
function DateRangePopupComponent_ng_template_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8);
    ɵɵlistener("click", function DateRangePopupComponent_ng_template_6_For_1_Template_li_click_0_listener() {
      const name_r9 = ɵɵrestoreView(_r8).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onClickPresetRange(ctx_r0.ranges[name_r9]));
    })("mouseenter", function DateRangePopupComponent_ng_template_6_For_1_Template_li_mouseenter_0_listener() {
      const name_r9 = ɵɵrestoreView(_r8).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onHoverPresetRange(ctx_r0.ranges[name_r9]));
    })("mouseleave", function DateRangePopupComponent_ng_template_6_For_1_Template_li_mouseleave_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPresetRangeMouseLeave());
    });
    ɵɵelementStart(1, "span", 9);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const name_r9 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-preset");
    ɵɵadvance(2);
    ɵɵtextInterpolate(name_r9);
  }
}
function DateRangePopupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, DateRangePopupComponent_ng_template_6_For_1_Template, 3, 4, "li", null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.getObjectKeys(ctx_r0.ranges));
  }
}
var _c4 = ["separatorElement"];
var _c5 = ["pickerInput"];
var _c6 = ["rangePickerInput"];
function NzDatePickerComponent_Conditional_0_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "input", 7, 3);
    ɵɵtwoWayListener("ngModelChange", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r2.inputValue, $event) || (ctx_r2.inputValue = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("focus", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_focus_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onFocus($event));
    })("focusout", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_focusout_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onFocusout($event));
    })("ngModelChange", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onInputChange($event));
    })("keyup.enter", function NzDatePickerComponent_Conditional_0_Conditional_0_Template_input_keyup_enter_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onKeyupEnter($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, NzDatePickerComponent_Conditional_0_Conditional_0_ng_container_3_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const tplRightRest_r4 = ɵɵreference(5);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-input");
    ɵɵadvance();
    ɵɵclassProp("ant-input-disabled", ctx_r2.nzDisabled);
    ɵɵpropertyInterpolate("placeholder", ctx_r2.getPlaceholder());
    ɵɵproperty("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly);
    ɵɵtwoWayProperty("ngModel", ctx_r2.inputValue);
    ɵɵproperty("size", ctx_r2.inputSize);
    ɵɵattribute("id", ctx_r2.nzId);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", tplRightRest_r4);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ctx_r2.nzSeparator, " ");
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 11);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_1_Template, 1, 1)(2, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Conditional_2_Template, 1, 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r2.nzSeparator ? 1 : 2);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDatePickerComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", null, 4)(4, "span");
    ɵɵtemplate(5, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_5_Template, 3, 1, "ng-container", 10);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div");
    ɵɵtemplate(7, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_7_Template, 1, 0, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵtemplate(8, NzDatePickerComponent_Conditional_0_Conditional_1_ng_container_8_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const tplRangeInput_r5 = ɵɵreference(3);
    const tplRightRest_r4 = ɵɵreference(5);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-input");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tplRangeInput_r5)("ngTemplateOutletContext", ɵɵpureFunction0(18, _c2));
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-range-separator");
    ɵɵadvance(2);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-separator");
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzSeparator);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-input");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tplRangeInput_r5)("ngTemplateOutletContext", ɵɵpureFunction0(19, _c3));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", tplRightRest_r4);
  }
}
function NzDatePickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDatePickerComponent_Conditional_0_Conditional_0_Template, 4, 12, "div")(1, NzDatePickerComponent_Conditional_0_Conditional_1_Template, 9, 20);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, !ctx_r2.isRange ? 0 : 1);
  }
}
function NzDatePickerComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzDatePickerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDatePickerComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const inlineMode_r6 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", inlineMode_r6);
  }
}
function NzDatePickerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 13, 5);
    ɵɵlistener("click", function NzDatePickerComponent_ng_template_2_Template_input_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClickInputBox($event));
    })("focusout", function NzDatePickerComponent_ng_template_2_Template_input_focusout_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onFocusout($event));
    })("focus", function NzDatePickerComponent_ng_template_2_Template_input_focus_0_listener($event) {
      const partType_r8 = ɵɵrestoreView(_r7).partType;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onFocus($event, partType_r8));
    })("keyup.enter", function NzDatePickerComponent_ng_template_2_Template_input_keyup_enter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyupEnter($event));
    });
    ɵɵtwoWayListener("ngModelChange", function NzDatePickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) {
      const partType_r8 = ɵɵrestoreView(_r7).partType;
      const ctx_r2 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r8)], $event) || (ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r8)] = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function NzDatePickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const partType_r8 = ctx.partType;
    const ctx_r2 = ɵɵnextContext();
    ɵɵpropertyInterpolate("placeholder", ctx_r2.getPlaceholder(partType_r8));
    ɵɵproperty("disabled", ctx_r2.nzDisabled)("readOnly", ctx_r2.nzInputReadOnly)("size", ctx_r2.inputSize);
    ɵɵtwoWayProperty("ngModel", ctx_r2.inputValue[ctx_r2.datePickerService.getActiveIndex(partType_r8)]);
    ɵɵattribute("id", ctx_r2.nzId);
  }
}
function NzDatePickerComponent_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function NzDatePickerComponent_ng_template_4_Conditional_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onClickClear($event));
    });
    ɵɵelement(1, "span", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-clear");
  }
}
function NzDatePickerComponent_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r10 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("nzType", suffixIcon_r10);
  }
}
function NzDatePickerComponent_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 18);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("status", ctx_r2.status);
  }
}
function NzDatePickerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
    ɵɵtemplate(1, NzDatePickerComponent_ng_template_4_Conditional_1_Template, 2, 3, "span");
    ɵɵelementStart(2, "span");
    ɵɵtemplate(3, NzDatePickerComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 10)(4, NzDatePickerComponent_ng_template_4_Conditional_4_Template, 1, 1, "nz-form-item-feedback-icon");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-active-bar");
    ɵɵproperty("ngStyle", ctx_r2.activeBarStyle);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r2.showClear ? 1 : -1);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-suffix");
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzSuffixIcon);
    ɵɵadvance();
    ɵɵconditional(4, ctx_r2.hasFeedback && !!ctx_r2.status ? 4 : -1);
  }
}
function NzDatePickerComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "date-range-popup", 19);
    ɵɵlistener("panelModeChange", function NzDatePickerComponent_ng_template_6_Template_date_range_popup_panelModeChange_1_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onPanelModeChange($event));
    })("calendarChange", function NzDatePickerComponent_ng_template_6_Template_date_range_popup_calendarChange_1_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onCalendarChange($event));
    })("resultOk", function NzDatePickerComponent_ng_template_6_Template_date_range_popup_resultOk_1_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onResultOk());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r2.prefixCls, "-dropdown ", ctx_r2.nzDropdownClassName, "");
    ɵɵclassProp("ant-picker-dropdown-rtl", ctx_r2.dir === "rtl")("ant-picker-dropdown-placement-bottomLeft", ctx_r2.currentPositionY === "bottom" && ctx_r2.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r2.currentPositionY === "top" && ctx_r2.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r2.currentPositionY === "bottom" && ctx_r2.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r2.currentPositionY === "top" && ctx_r2.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r2.isRange)("ant-picker-active-left", ctx_r2.datePickerService.activeInput === "left")("ant-picker-active-right", ctx_r2.datePickerService.activeInput === "right");
    ɵɵproperty("ngStyle", ctx_r2.nzPopupStyle);
    ɵɵadvance();
    ɵɵproperty("isRange", ctx_r2.isRange)("inline", ctx_r2.nzInline)("defaultPickerValue", ctx_r2.nzDefaultPickerValue)("showWeek", ctx_r2.nzShowWeekNumber || ctx_r2.nzMode === "week")("panelMode", ctx_r2.panelMode)("locale", ctx_r2.nzLocale == null ? null : ctx_r2.nzLocale.lang)("showToday", ctx_r2.nzMode === "date" && ctx_r2.nzShowToday && !ctx_r2.isRange && !ctx_r2.nzShowTime)("showNow", ctx_r2.nzMode === "date" && ctx_r2.nzShowNow && !ctx_r2.isRange && !!ctx_r2.nzShowTime)("showTime", ctx_r2.nzShowTime)("dateRender", ctx_r2.nzDateRender)("disabledDate", ctx_r2.nzDisabledDate)("disabledTime", ctx_r2.nzDisabledTime)("extraFooter", ctx_r2.extraFooter)("ranges", ctx_r2.nzRanges)("dir", ctx_r2.dir);
  }
}
function NzDatePickerComponent_ng_template_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDatePickerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, NzDatePickerComponent_ng_template_8_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const inlineMode_r6 = ɵɵreference(7);
    ɵɵproperty("nzNoAnimation", !!(ctx_r2.noAnimation == null ? null : ctx_r2.noAnimation.nzNoAnimation))("@slideMotion", "enter");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", inlineMode_r6);
  }
}
var PREFIX_CLASS = "ant-picker";
var defaultDisabledTime = {
  nzDisabledHours() {
    return [];
  },
  nzDisabledMinutes() {
    return [];
  },
  nzDisabledSeconds() {
    return [];
  }
};
function getTimeConfig(value, disabledTime) {
  let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
  disabledTimeConfig = __spreadValues(__spreadValues({}, defaultDisabledTime), disabledTimeConfig);
  return disabledTimeConfig;
}
function isTimeValidByConfig(value, disabledTimeConfig) {
  let invalidTime = false;
  if (value) {
    const hour = value.getHours();
    const minutes = value.getMinutes();
    const seconds = value.getSeconds();
    const disabledHours = disabledTimeConfig.nzDisabledHours();
    if (disabledHours.indexOf(hour) === -1) {
      const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
      if (disabledMinutes.indexOf(minutes) === -1) {
        const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }
  return !invalidTime;
}
function isTimeValid(value, disabledTime) {
  const disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}
function isAllowedDate(value, disabledDate, disabledTime) {
  if (!value) {
    return false;
  }
  if (disabledDate) {
    if (disabledDate(value.nativeDate)) {
      return false;
    }
  }
  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }
  return true;
}
function transCompatFormat(format) {
  return format && format.replace(/Y/g, "y").replace(/D/g, "d");
}
var _CalendarFooterComponent = class _CalendarFooterComponent {
  constructor(dateHelper) {
    this.dateHelper = dateHelper;
    this.showToday = false;
    this.showNow = false;
    this.hasTimePicker = false;
    this.isRange = false;
    this.okDisabled = false;
    this.rangeQuickSelector = null;
    this.clickOk = new EventEmitter();
    this.clickToday = new EventEmitter();
    this.prefixCls = PREFIX_CLASS;
    this.isTemplateRef = isTemplateRef;
    this.isNonEmptyString = isNonEmptyString;
    this.isTodayDisabled = false;
    this.todayTitle = "";
  }
  ngOnChanges(changes) {
    const now = /* @__PURE__ */ new Date();
    if (changes.disabledDate) {
      this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(now));
    }
    if (changes.locale) {
      const dateFormat = transCompatFormat(this.locale.dateFormat);
      this.todayTitle = this.dateHelper.format(now, dateFormat);
    }
  }
  onClickToday() {
    const now = new CandyDate();
    this.clickToday.emit(now.clone());
  }
  get isExtraFooterTemplateRef() {
    return isTemplateRef(this.extraFooter);
  }
  get isExtraFooterNonEmptyString() {
    return isNonEmptyString(this.extraFooter);
  }
};
_CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) {
  return new (t || _CalendarFooterComponent)(ɵɵdirectiveInject(DateHelperService));
};
_CalendarFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarFooterComponent,
  selectors: [["calendar-footer"]],
  inputs: {
    locale: "locale",
    showToday: "showToday",
    showNow: "showNow",
    hasTimePicker: "hasTimePicker",
    isRange: "isRange",
    okDisabled: "okDisabled",
    disabledDate: "disabledDate",
    extraFooter: "extraFooter",
    rangeQuickSelector: "rangeQuickSelector"
  },
  outputs: {
    clickOk: "clickOk",
    clickToday: "clickToday"
  },
  exportAs: ["calendarFooter"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 4,
  vars: 6,
  consts: [["role", "button"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "click", "title"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "click", "disabled"]],
  template: function CalendarFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, CalendarFooterComponent_Conditional_1_Template, 3, 5, "div")(2, CalendarFooterComponent_Conditional_2_Template, 2, 6, "a", 0)(3, CalendarFooterComponent_Conditional_3_Template, 4, 6, "ul");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-footer");
      ɵɵadvance();
      ɵɵconditional(1, ctx.extraFooter ? 1 : -1);
      ɵɵadvance();
      ɵɵconditional(2, ctx.showToday ? 2 : -1);
      ɵɵadvance();
      ɵɵconditional(3, ctx.hasTimePicker || ctx.rangeQuickSelector ? 3 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
  encapsulation: 2,
  changeDetection: 0
});
var CalendarFooterComponent = _CalendarFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarFooterComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "calendar-footer",
      exportAs: "calendarFooter",
      template: `
    <div class="{{ prefixCls }}-footer">
      @if (extraFooter) {
        <div class="{{ prefixCls }}-footer-extra">
          @if (isExtraFooterTemplateRef) {
            <ng-container *ngTemplateOutlet="$any(extraFooter)" />
          }
          @if (isExtraFooterNonEmptyString) {
            <span [innerHTML]="extraFooter"></span>
          }
        </div>
      }

      @if (showToday) {
        <a
          class="{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}"
          role="button"
          (click)="isTodayDisabled ? null : onClickToday()"
          title="{{ todayTitle }}"
        >
          {{ locale.today }}
        </a>
      }

      @if (hasTimePicker || rangeQuickSelector) {
        <ul class="{{ prefixCls }}-ranges">
          <ng-container *ngTemplateOutlet="rangeQuickSelector" />
          @if (showNow) {
            <li class="{{ prefixCls }}-now">
              <a class="{{ prefixCls }}-now-btn" (click)="isTodayDisabled ? null : onClickToday()">
                {{ locale.now }}
              </a>
            </li>
          }

          @if (hasTimePicker) {
            <li class="{{ prefixCls }}-ok">
              <button
                nz-button
                type="button"
                nzType="primary"
                nzSize="small"
                [disabled]="okDisabled"
                (click)="okDisabled ? null : clickOk.emit()"
              >
                {{ locale.ok }}
              </button>
            </li>
          }
        </ul>
      }
    </div>
  `,
      imports: [NgTemplateOutlet, NzButtonModule],
      standalone: true
    }]
  }], () => [{
    type: DateHelperService
  }], {
    locale: [{
      type: Input
    }],
    showToday: [{
      type: Input
    }],
    showNow: [{
      type: Input
    }],
    hasTimePicker: [{
      type: Input
    }],
    isRange: [{
      type: Input
    }],
    okDisabled: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    extraFooter: [{
      type: Input
    }],
    rangeQuickSelector: [{
      type: Input
    }],
    clickOk: [{
      type: Output
    }],
    clickToday: [{
      type: Output
    }]
  });
})();
var _DatePickerService = class _DatePickerService {
  constructor() {
    this.activeInput = "left";
    this.arrowLeft = 0;
    this.isRange = false;
    this.valueChange$ = new ReplaySubject(1);
    this.emitValue$ = new Subject();
    this.inputPartChange$ = new Subject();
  }
  initValue(reset = false) {
    if (reset) {
      this.initialValue = this.isRange ? [] : null;
    }
    this.setValue(this.initialValue);
  }
  hasValue(value = this.value) {
    if (Array.isArray(value)) {
      return !!value[0] || !!value[1];
    } else {
      return !!value;
    }
  }
  makeValue(value) {
    if (this.isRange) {
      return value ? value.map((val) => new CandyDate(val)) : [];
    } else {
      return value ? new CandyDate(value) : null;
    }
  }
  setActiveDate(value, hasTimePicker = false, mode = "month") {
    const parentPanels = {
      date: "month",
      month: "year",
      year: "decade"
    };
    if (this.isRange) {
      this.activeDate = normalizeRangeValue(value, hasTimePicker, parentPanels[mode], this.activeInput);
    } else {
      this.activeDate = cloneDate(value);
    }
  }
  setValue(value) {
    this.value = value;
    this.valueChange$.next(this.value);
  }
  getActiveIndex(part = this.activeInput) {
    return {
      left: 0,
      right: 1
    }[part];
  }
  ngOnDestroy() {
    this.valueChange$.complete();
    this.emitValue$.complete();
    this.inputPartChange$.complete();
  }
};
_DatePickerService.ɵfac = function DatePickerService_Factory(t) {
  return new (t || _DatePickerService)();
};
_DatePickerService.ɵprov = ɵɵdefineInjectable({
  token: _DatePickerService,
  factory: _DatePickerService.ɵfac
});
var DatePickerService = _DatePickerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerService, [{
    type: Injectable
  }], null, null);
})();
var _AbstractPanelHeader = class _AbstractPanelHeader {
  constructor() {
    this.prefixCls = `ant-picker-header`;
    this.selectors = [];
    this.showSuperPreBtn = true;
    this.showSuperNextBtn = true;
    this.showPreBtn = true;
    this.showNextBtn = true;
    this.panelModeChange = new EventEmitter();
    this.valueChange = new EventEmitter();
  }
  superPreviousTitle() {
    return this.locale.previousYear;
  }
  previousTitle() {
    return this.locale.previousMonth;
  }
  superNextTitle() {
    return this.locale.nextYear;
  }
  nextTitle() {
    return this.locale.nextMonth;
  }
  superPrevious() {
    this.changeValue(this.value.addYears(-1));
  }
  superNext() {
    this.changeValue(this.value.addYears(1));
  }
  previous() {
    this.changeValue(this.value.addMonths(-1));
  }
  next() {
    this.changeValue(this.value.addMonths(1));
  }
  changeValue(value) {
    if (this.value !== value) {
      this.value = value;
      this.valueChange.emit(this.value);
      this.render();
    }
  }
  changeMode(mode) {
    this.panelModeChange.emit(mode);
  }
  render() {
    if (this.value) {
      this.selectors = this.getSelectors();
    }
  }
  ngOnInit() {
    if (!this.value) {
      this.value = new CandyDate();
    }
    this.selectors = this.getSelectors();
  }
  ngOnChanges(changes) {
    if (changes.value || changes.locale) {
      this.render();
    }
  }
};
_AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) {
  return new (t || _AbstractPanelHeader)();
};
_AbstractPanelHeader.ɵdir = ɵɵdefineDirective({
  type: _AbstractPanelHeader,
  inputs: {
    value: "value",
    locale: "locale",
    showSuperPreBtn: "showSuperPreBtn",
    showSuperNextBtn: "showSuperNextBtn",
    showPreBtn: "showPreBtn",
    showNextBtn: "showNextBtn"
  },
  outputs: {
    panelModeChange: "panelModeChange",
    valueChange: "valueChange"
  },
  features: [ɵɵNgOnChangesFeature]
});
var AbstractPanelHeader = _AbstractPanelHeader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractPanelHeader, [{
    type: Directive
  }], null, {
    value: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showSuperPreBtn: [{
      type: Input
    }],
    showSuperNextBtn: [{
      type: Input
    }],
    showPreBtn: [{
      type: Input
    }],
    showNextBtn: [{
      type: Input
    }],
    panelModeChange: [{
      type: Output
    }],
    valueChange: [{
      type: Output
    }]
  });
})();
var _DecadeHeaderComponent = class _DecadeHeaderComponent extends AbstractPanelHeader {
  previous() {
  }
  next() {
  }
  get startYear() {
    return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
  }
  get endYear() {
    return this.startYear + 99;
  }
  superPrevious() {
    this.changeValue(this.value.addYears(-100));
  }
  superNext() {
    this.changeValue(this.value.addYears(100));
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-decade-btn`,
      title: "",
      onClick: () => {
      },
      label: `${this.startYear}-${this.endYear}`
    }];
  }
};
_DecadeHeaderComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵDecadeHeaderComponent_BaseFactory;
  return function DecadeHeaderComponent_Factory(t) {
    return (ɵDecadeHeaderComponent_BaseFactory || (ɵDecadeHeaderComponent_BaseFactory = ɵɵgetInheritedFactory(_DecadeHeaderComponent)))(t || _DecadeHeaderComponent);
  };
})();
_DecadeHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _DecadeHeaderComponent,
  selectors: [["decade-header"]],
  exportAs: ["decadeHeader"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 30,
  consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
  template: function DecadeHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "button", 0);
      ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_1_listener() {
        return ctx.superPrevious();
      });
      ɵɵelement(2, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "button", 0);
      ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_3_listener() {
        return ctx.previous();
      });
      ɵɵelement(4, "span", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div");
      ɵɵrepeaterCreate(6, DecadeHeaderComponent_For_7_Template, 2, 5, "button", 3, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 0);
      ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_8_listener() {
        return ctx.next();
      });
      ɵɵelement(9, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(10, "button", 0);
      ɵɵlistener("click", function DecadeHeaderComponent_Template_button_click_10_listener() {
        return ctx.superNext();
      });
      ɵɵelement(11, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
      ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
      ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.previousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
      ɵɵadvance();
      ɵɵrepeater(ctx.selectors);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
      ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.nextTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
      ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var DecadeHeaderComponent = _DecadeHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecadeHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "decade-header",
      exportAs: "decadeHeader",
      imports: [NgForOf, NgIf, NgClass],
      standalone: true,
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for(selector of selectors; track selector) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], null, null);
})();
var _AbstractTable = class _AbstractTable {
  constructor() {
    this.headRow = [];
    this.bodyRows = [];
    this.MAX_ROW = 6;
    this.MAX_COL = 7;
    this.prefixCls = "ant-picker";
    this.activeDate = new CandyDate();
    this.showWeek = false;
    this.selectedValue = [];
    this.hoverValue = [];
    this.canSelectWeek = false;
    this.valueChange = new EventEmitter();
    this.cellHover = new EventEmitter();
  }
  render() {
    if (this.activeDate) {
      this.headRow = this.makeHeadRow();
      this.bodyRows = this.makeBodyRows();
    }
  }
  hasRangeValue() {
    return this.selectedValue?.length > 0 || this.hoverValue?.length > 0;
  }
  getClassMap(cell) {
    return {
      [`ant-picker-cell`]: true,
      [`ant-picker-cell-in-view`]: true,
      [`ant-picker-cell-selected`]: cell.isSelected,
      [`ant-picker-cell-disabled`]: cell.isDisabled,
      [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
      [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
      [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
      [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
      [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
      [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
      [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
      [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
      [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
      [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
      [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
      [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
    };
  }
  ngOnInit() {
    this.render();
  }
  ngOnChanges(changes) {
    if (changes.activeDate && !changes.activeDate.currentValue) {
      this.activeDate = new CandyDate();
    }
    if (changes.disabledDate || changes.locale || changes.showWeek || changes.selectWeek || this.isDateRealChange(changes.activeDate) || this.isDateRealChange(changes.value) || this.isDateRealChange(changes.selectedValue) || this.isDateRealChange(changes.hoverValue)) {
      this.render();
    }
  }
  isDateRealChange(change) {
    if (change) {
      const previousValue = change.previousValue;
      const currentValue = change.currentValue;
      if (Array.isArray(currentValue)) {
        return !Array.isArray(previousValue) || currentValue.length !== previousValue.length || currentValue.some((value, index) => {
          const previousCandyDate = previousValue[index];
          return previousCandyDate instanceof CandyDate ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
        });
      } else {
        return !this.isSameDate(previousValue, currentValue);
      }
    }
    return false;
  }
  isSameDate(left, right) {
    return !left && !right || left && right && right.isSameDay(left);
  }
};
_AbstractTable.ɵfac = function AbstractTable_Factory(t) {
  return new (t || _AbstractTable)();
};
_AbstractTable.ɵdir = ɵɵdefineDirective({
  type: _AbstractTable,
  inputs: {
    prefixCls: "prefixCls",
    value: "value",
    locale: "locale",
    activeDate: "activeDate",
    showWeek: "showWeek",
    selectedValue: "selectedValue",
    hoverValue: "hoverValue",
    disabledDate: "disabledDate",
    cellRender: "cellRender",
    fullCellRender: "fullCellRender",
    canSelectWeek: "canSelectWeek"
  },
  outputs: {
    valueChange: "valueChange",
    cellHover: "cellHover"
  },
  features: [ɵɵNgOnChangesFeature]
});
var AbstractTable = _AbstractTable;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractTable, [{
    type: Directive
  }], null, {
    prefixCls: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    activeDate: [{
      type: Input
    }],
    showWeek: [{
      type: Input
    }],
    selectedValue: [{
      type: Input
    }],
    hoverValue: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    cellRender: [{
      type: Input
    }],
    fullCellRender: [{
      type: Input
    }],
    canSelectWeek: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    cellHover: [{
      type: Output
    }]
  });
})();
var MAX_ROW = 4;
var MAX_COL = 3;
var _DecadeTableComponent = class _DecadeTableComponent extends AbstractTable {
  get startYear() {
    return parseInt(`${this.activeDate.getYear() / 100}`, 10) * 100;
  }
  get endYear() {
    return this.startYear + 99;
  }
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const decades = [];
    const currentYear = this.value && this.value.getYear();
    const startYear = this.startYear;
    const endYear = this.endYear;
    const previousYear = startYear - 10;
    let index = 0;
    for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
      const row = {
        dateCells: [],
        trackByIndex: rowIndex
      };
      for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
        const start = previousYear + index * 10;
        const end = previousYear + index * 10 + 9;
        const content = `${start}-${end}`;
        const cell = {
          trackByIndex: colIndex,
          value: this.activeDate.setYear(start).nativeDate,
          content,
          title: content,
          isDisabled: false,
          isSelected: currentYear >= start && currentYear <= end,
          isLowerThanStart: end < startYear,
          isBiggerThanEnd: start > endYear,
          classMap: {},
          onClick() {
          },
          onMouseEnter() {
          }
        };
        cell.classMap = this.getClassMap(cell);
        cell.onClick = () => this.chooseDecade(start);
        index++;
        row.dateCells.push(cell);
      }
      decades.push(row);
    }
    return decades;
  }
  getClassMap(cell) {
    return {
      [`${this.prefixCls}-cell`]: true,
      [`${this.prefixCls}-cell-in-view`]: !cell.isBiggerThanEnd && !cell.isLowerThanStart,
      [`${this.prefixCls}-cell-selected`]: cell.isSelected,
      [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
    };
  }
  chooseDecade(year) {
    this.value = this.activeDate.setYear(year);
    this.valueChange.emit(this.value);
  }
};
_DecadeTableComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵDecadeTableComponent_BaseFactory;
  return function DecadeTableComponent_Factory(t) {
    return (ɵDecadeTableComponent_BaseFactory || (ɵDecadeTableComponent_BaseFactory = ɵɵgetInheritedFactory(_DecadeTableComponent)))(t || _DecadeTableComponent);
  };
})();
_DecadeTableComponent.ɵcmp = ɵɵdefineComponent({
  type: _DecadeTableComponent,
  selectors: [["decade-table"]],
  exportAs: ["decadeTable"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function DecadeTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0);
      ɵɵtemplate(1, DecadeTableComponent_Conditional_1_Template, 5, 1, "thead");
      ɵɵelementStart(2, "tbody");
      ɵɵrepeaterCreate(3, DecadeTableComponent_For_4_Template, 4, 2, "tr", 1, _forTrack0);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.bodyRows);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var DecadeTableComponent = _DecadeTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DecadeTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "decade-table",
      exportAs: "decadeTable",
      standalone: true,
      imports: [NgIf, NgForOf, NgClass, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if(headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if(showWeek) {
          <th role="columnheader"></th>
        }
        @for(cell of headRow; track cell) {
          <th role="columnheader" title="{{ cell.title }}"> {{ cell.content }} </th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for(row of bodyRows; track row.trackByIndex) {
      <tr [ngClass]="row.classMap!" role="row">
        @if(row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }} </td>
        }
        @for(cell of row.dateCells; track cell.trackByIndex) {
          <td
            title="{{ cell.title }}"
            role="gridcell"
            [ngClass]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case('ant-picker') {
                @if(cell.isTemplateRef) {
                  <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }" />
                }@else if(cell.isNonEmptyString) {
                  <span [innerHTML]="cell.cellRender"></span>
                }@else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if(cell.fullCellRender) {
                    <ng-container *ngTemplateOutlet="$any(cell.fullCellRender); context: { $implicit: cell.value }" />
                  }@else() {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }">
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }

      </tr>
    }
  </tbody>
</table>
`
    }]
  }], null, null);
})();
var _YearHeaderComponent = class _YearHeaderComponent extends AbstractPanelHeader {
  get startYear() {
    return parseInt(`${this.value.getYear() / 10}`, 10) * 10;
  }
  get endYear() {
    return this.startYear + 9;
  }
  superPrevious() {
    this.changeValue(this.value.addYears(-10));
  }
  superNext() {
    this.changeValue(this.value.addYears(10));
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-year-btn`,
      title: "",
      onClick: () => this.changeMode("decade"),
      label: `${this.startYear}-${this.endYear}`
    }];
  }
};
_YearHeaderComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵYearHeaderComponent_BaseFactory;
  return function YearHeaderComponent_Factory(t) {
    return (ɵYearHeaderComponent_BaseFactory || (ɵYearHeaderComponent_BaseFactory = ɵɵgetInheritedFactory(_YearHeaderComponent)))(t || _YearHeaderComponent);
  };
})();
_YearHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _YearHeaderComponent,
  selectors: [["year-header"]],
  exportAs: ["yearHeader"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 30,
  consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
  template: function YearHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "button", 0);
      ɵɵlistener("click", function YearHeaderComponent_Template_button_click_1_listener() {
        return ctx.superPrevious();
      });
      ɵɵelement(2, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "button", 0);
      ɵɵlistener("click", function YearHeaderComponent_Template_button_click_3_listener() {
        return ctx.previous();
      });
      ɵɵelement(4, "span", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div");
      ɵɵrepeaterCreate(6, YearHeaderComponent_For_7_Template, 2, 5, "button", 3, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 0);
      ɵɵlistener("click", function YearHeaderComponent_Template_button_click_8_listener() {
        return ctx.next();
      });
      ɵɵelement(9, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(10, "button", 0);
      ɵɵlistener("click", function YearHeaderComponent_Template_button_click_10_listener() {
        return ctx.superNext();
      });
      ɵɵelement(11, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
      ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
      ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.previousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
      ɵɵadvance();
      ɵɵrepeater(ctx.selectors);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
      ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.nextTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
      ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var YearHeaderComponent = _YearHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "year-header",
      exportAs: "yearHeader",
      standalone: true,
      imports: [NgForOf, NgIf, NgClass],
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for(selector of selectors; track selector) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], null, null);
})();
var _YearTableComponent = class _YearTableComponent extends AbstractTable {
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
    this.MAX_ROW = 4;
    this.MAX_COL = 3;
  }
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const currentYear = this.activeDate && this.activeDate.getYear();
    const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
    const endYear = startYear + 9;
    const previousYear = startYear - 1;
    const years = [];
    let yearValue = 0;
    for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
      const row = {
        dateCells: [],
        trackByIndex: rowIndex
      };
      for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
        const yearNum = previousYear + yearValue;
        const year = this.activeDate.setYear(yearNum);
        const content = this.dateHelper.format(year.nativeDate, "yyyy");
        const isDisabled = this.isDisabledYear(year);
        const cell = {
          trackByIndex: colIndex,
          value: year.nativeDate,
          isDisabled,
          isSameDecade: yearNum >= startYear && yearNum <= endYear,
          isSelected: yearNum === (this.value && this.value.getYear()),
          content,
          title: content,
          classMap: {},
          isLastCellInPanel: year.getYear() === endYear,
          isFirstCellInPanel: year.getYear() === startYear,
          cellRender: valueFunctionProp(this.cellRender, year),
          // Customized content
          fullCellRender: valueFunctionProp(this.fullCellRender, year),
          onClick: () => this.chooseYear(cell.value.getFullYear()),
          // don't use yearValue here,
          onMouseEnter: () => this.cellHover.emit(year)
        };
        this.addCellProperty(cell, year);
        row.dateCells.push(cell);
        yearValue++;
      }
      years.push(row);
    }
    return years;
  }
  getClassMap(cell) {
    return __spreadProps(__spreadValues({}, super.getClassMap(cell)), {
      [`ant-picker-cell-in-view`]: !!cell.isSameDecade
    });
  }
  isDisabledYear(year) {
    if (!this.disabledDate) {
      return false;
    }
    const firstOfMonth = year.setMonth(0).setDate(1);
    for (let date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
      if (!this.disabledDate(date.nativeDate)) {
        return false;
      }
    }
    return true;
  }
  addCellProperty(cell, year) {
    if (this.hasRangeValue()) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameYear(year)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameYear(year)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameYear(year);
        cell.isHoverEnd = endHover.isSameYear(year);
        cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeYear(year) && year?.isBeforeYear(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    } else if (year.isSameYear(this.value)) {
      cell.isSelected = true;
    }
    cell.classMap = this.getClassMap(cell);
  }
  chooseYear(year) {
    this.value = this.activeDate.setYear(year);
    this.valueChange.emit(this.value);
    this.render();
  }
};
_YearTableComponent.ɵfac = function YearTableComponent_Factory(t) {
  return new (t || _YearTableComponent)(ɵɵdirectiveInject(DateHelperService));
};
_YearTableComponent.ɵcmp = ɵɵdefineComponent({
  type: _YearTableComponent,
  selectors: [["year-table"]],
  exportAs: ["yearTable"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function YearTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0);
      ɵɵtemplate(1, YearTableComponent_Conditional_1_Template, 5, 1, "thead");
      ɵɵelementStart(2, "tbody");
      ɵɵrepeaterCreate(3, YearTableComponent_For_4_Template, 4, 2, "tr", 1, _forTrack0);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.bodyRows);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var YearTableComponent = _YearTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "year-table",
      exportAs: "yearTable",
      imports: [NgIf, NgForOf, NgClass, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault],
      standalone: true,
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if(headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if(showWeek) {
          <th role="columnheader"></th>
        }
        @for(cell of headRow; track cell) {
          <th role="columnheader" title="{{ cell.title }}"> {{ cell.content }} </th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for(row of bodyRows; track row.trackByIndex) {
      <tr [ngClass]="row.classMap!" role="row">
        @if(row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }} </td>
        }
        @for(cell of row.dateCells; track cell.trackByIndex) {
          <td
            title="{{ cell.title }}"
            role="gridcell"
            [ngClass]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case('ant-picker') {
                @if(cell.isTemplateRef) {
                  <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }" />
                }@else if(cell.isNonEmptyString) {
                  <span [innerHTML]="cell.cellRender"></span>
                }@else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if(cell.fullCellRender) {
                    <ng-container *ngTemplateOutlet="$any(cell.fullCellRender); context: { $implicit: cell.value }" />
                  }@else() {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }">
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }

      </tr>
    }
  </tbody>
</table>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var _MonthHeaderComponent = class _MonthHeaderComponent extends AbstractPanelHeader {
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-month-btn`,
      title: this.locale.yearSelect,
      onClick: () => this.changeMode("year"),
      label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
    }];
  }
};
_MonthHeaderComponent.ɵfac = function MonthHeaderComponent_Factory(t) {
  return new (t || _MonthHeaderComponent)(ɵɵdirectiveInject(DateHelperService));
};
_MonthHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _MonthHeaderComponent,
  selectors: [["month-header"]],
  exportAs: ["monthHeader"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 30,
  consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
  template: function MonthHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "button", 0);
      ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_1_listener() {
        return ctx.superPrevious();
      });
      ɵɵelement(2, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "button", 0);
      ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_3_listener() {
        return ctx.previous();
      });
      ɵɵelement(4, "span", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div");
      ɵɵrepeaterCreate(6, MonthHeaderComponent_For_7_Template, 2, 5, "button", 3, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 0);
      ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_8_listener() {
        return ctx.next();
      });
      ɵɵelement(9, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(10, "button", 0);
      ɵɵlistener("click", function MonthHeaderComponent_Template_button_click_10_listener() {
        return ctx.superNext();
      });
      ɵɵelement(11, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
      ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
      ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.previousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
      ɵɵadvance();
      ɵɵrepeater(ctx.selectors);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
      ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.nextTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
      ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var MonthHeaderComponent = _MonthHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "month-header",
      exportAs: "monthHeader",
      standalone: true,
      imports: [NgForOf, NgIf, NgClass],
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for(selector of selectors; track selector) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var _MonthTableComponent = class _MonthTableComponent extends AbstractTable {
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
    this.MAX_ROW = 4;
    this.MAX_COL = 3;
  }
  makeHeadRow() {
    return [];
  }
  makeBodyRows() {
    const months = [];
    let monthValue = 0;
    for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
      const row = {
        dateCells: [],
        trackByIndex: rowIndex
      };
      for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
        const month = this.activeDate.setMonth(monthValue);
        const isDisabled = this.isDisabledMonth(month);
        const content = this.dateHelper.format(month.nativeDate, "MMM");
        const cell = {
          trackByIndex: colIndex,
          value: month.nativeDate,
          isDisabled,
          isSelected: month.isSameMonth(this.value),
          content,
          title: content,
          classMap: {},
          cellRender: valueFunctionProp(this.cellRender, month),
          // Customized content
          fullCellRender: valueFunctionProp(this.fullCellRender, month),
          onClick: () => this.chooseMonth(cell.value.getMonth()),
          // don't use monthValue here,
          onMouseEnter: () => this.cellHover.emit(month)
        };
        this.addCellProperty(cell, month);
        row.dateCells.push(cell);
        monthValue++;
      }
      months.push(row);
    }
    return months;
  }
  isDisabledMonth(month) {
    if (!this.disabledDate) {
      return false;
    }
    const firstOfMonth = month.setDate(1);
    for (let date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
      if (!this.disabledDate(date.nativeDate)) {
        return false;
      }
    }
    return true;
  }
  addCellProperty(cell, month) {
    if (this.hasRangeValue()) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameMonth(month)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameMonth(month)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameMonth(month);
        cell.isHoverEnd = endHover.isSameMonth(month);
        cell.isLastCellInPanel = month.getMonth() === 11;
        cell.isFirstCellInPanel = month.getMonth() === 0;
        cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeMonth(month) && month?.isBeforeMonth(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    } else if (month.isSameMonth(this.value)) {
      cell.isSelected = true;
    }
    cell.classMap = this.getClassMap(cell);
  }
  chooseMonth(month) {
    this.value = this.activeDate.setMonth(month);
    this.valueChange.emit(this.value);
  }
};
_MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) {
  return new (t || _MonthTableComponent)(ɵɵdirectiveInject(DateHelperService));
};
_MonthTableComponent.ɵcmp = ɵɵdefineComponent({
  type: _MonthTableComponent,
  selectors: [["month-table"]],
  exportAs: ["monthTable"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function MonthTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0);
      ɵɵtemplate(1, MonthTableComponent_Conditional_1_Template, 5, 1, "thead");
      ɵɵelementStart(2, "tbody");
      ɵɵrepeaterCreate(3, MonthTableComponent_For_4_Template, 4, 2, "tr", 1, _forTrack0);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.bodyRows);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var MonthTableComponent = _MonthTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MonthTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "month-table",
      exportAs: "monthTable",
      standalone: true,
      imports: [NgIf, NgForOf, NgClass, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgSwitchDefault],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if(headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if(showWeek) {
          <th role="columnheader"></th>
        }
        @for(cell of headRow; track cell) {
          <th role="columnheader" title="{{ cell.title }}"> {{ cell.content }} </th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for(row of bodyRows; track row.trackByIndex) {
      <tr [ngClass]="row.classMap!" role="row">
        @if(row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }} </td>
        }
        @for(cell of row.dateCells; track cell.trackByIndex) {
          <td
            title="{{ cell.title }}"
            role="gridcell"
            [ngClass]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case('ant-picker') {
                @if(cell.isTemplateRef) {
                  <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }" />
                }@else if(cell.isNonEmptyString) {
                  <span [innerHTML]="cell.cellRender"></span>
                }@else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if(cell.fullCellRender) {
                    <ng-container *ngTemplateOutlet="$any(cell.fullCellRender); context: { $implicit: cell.value }" />
                  }@else() {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }">
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }

      </tr>
    }
  </tbody>
</table>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var _DateHeaderComponent = class _DateHeaderComponent extends AbstractPanelHeader {
  constructor(dateHelper) {
    super();
    this.dateHelper = dateHelper;
  }
  getSelectors() {
    return [{
      className: `${this.prefixCls}-year-btn`,
      title: this.locale.yearSelect,
      onClick: () => this.changeMode("year"),
      label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
    }, {
      className: `${this.prefixCls}-month-btn`,
      title: this.locale.monthSelect,
      onClick: () => this.changeMode("month"),
      label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || "MMM")
    }];
  }
};
_DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) {
  return new (t || _DateHeaderComponent)(ɵɵdirectiveInject(DateHelperService));
};
_DateHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _DateHeaderComponent,
  selectors: [["date-header"]],
  exportAs: ["dateHeader"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 12,
  vars: 30,
  consts: [["role", "button", "type", "button", "tabindex", "-1", 3, "click", "title"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], ["role", "button", "type", "button"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "click", "title"]],
  template: function DateHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "button", 0);
      ɵɵlistener("click", function DateHeaderComponent_Template_button_click_1_listener() {
        return ctx.superPrevious();
      });
      ɵɵelement(2, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "button", 0);
      ɵɵlistener("click", function DateHeaderComponent_Template_button_click_3_listener() {
        return ctx.previous();
      });
      ɵɵelement(4, "span", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div");
      ɵɵrepeaterCreate(6, DateHeaderComponent_For_7_Template, 2, 5, "button", 3, ɵɵrepeaterTrackByIdentity);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 0);
      ɵɵlistener("click", function DateHeaderComponent_Template_button_click_8_listener() {
        return ctx.next();
      });
      ɵɵelement(9, "span", 4);
      ɵɵelementEnd();
      ɵɵelementStart(10, "button", 0);
      ɵɵlistener("click", function DateHeaderComponent_Template_button_click_10_listener() {
        return ctx.superNext();
      });
      ɵɵelement(11, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-prev-btn");
      ɵɵstyleProp("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superPreviousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-prev-btn");
      ɵɵstyleProp("visibility", ctx.showPreBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.previousTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-view");
      ɵɵadvance();
      ɵɵrepeater(ctx.selectors);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-next-btn");
      ɵɵstyleProp("visibility", ctx.showNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.nextTitle());
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-super-next-btn");
      ɵɵstyleProp("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
      ɵɵpropertyInterpolate("title", ctx.superNextTitle());
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var DateHeaderComponent = _DateHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateHeaderComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "date-header",
      exportAs: "dateHeader",
      standalone: true,
      imports: [NgForOf, NgIf, NgClass],
      template: `<div class="{{ prefixCls }}">
  <button
    [style.visibility]="showSuperPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-prev-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superPreviousTitle() }}"
    (click)="superPrevious()"
  >
    <span class="ant-picker-super-prev-icon"></span>
  </button>
  <button
    [style.visibility]="showPreBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-prev-btn"
    role="button"
    type="button"
    title="{{ previousTitle() }}"
    tabindex="-1"
    (click)="previous()"
  >
    <span class="ant-picker-prev-icon"></span>
  </button>

  <div class="{{ prefixCls }}-view">
    @for(selector of selectors; track selector) {
      <button
        class="{{ selector.className }}"
        role="button"
        type="button"
        title="{{ selector.title || null }}"
        (click)="selector.onClick()"
      >
        {{ selector.label }}
      </button>
    }
  </div>
  <button
    [style.visibility]="showNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ nextTitle() }}"
    (click)="next()"
  >
    <span class="ant-picker-next-icon"></span>
  </button>
  <button
    [style.visibility]="showSuperNextBtn ? 'visible' : 'hidden'"
    class="{{ prefixCls }}-super-next-btn"
    role="button"
    type="button"
    tabindex="-1"
    title="{{ superNextTitle() }}"
    (click)="superNext()"
  >
    <span class="ant-picker-super-next-icon"></span>
  </button>
</div>
`
    }]
  }], () => [{
    type: DateHelperService
  }], null);
})();
var _DateTableComponent = class _DateTableComponent extends AbstractTable {
  constructor(i18n, dateHelper) {
    super();
    this.i18n = i18n;
    this.dateHelper = dateHelper;
  }
  changeValueFromInside(value) {
    this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
    this.valueChange.emit(this.activeDate);
    if (!this.activeDate.isSameMonth(this.value)) {
      this.render();
    }
  }
  makeHeadRow() {
    const weekDays = [];
    const start = this.activeDate.calendarStart({
      weekStartsOn: this.dateHelper.getFirstDayOfWeek()
    });
    for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
      const day = start.addDays(colIndex);
      weekDays.push({
        trackByIndex: null,
        value: day.nativeDate,
        title: this.dateHelper.format(day.nativeDate, "E"),
        // eg. Tue
        content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
        // eg. Tu,
        isSelected: false,
        isDisabled: false,
        onClick() {
        },
        onMouseEnter() {
        }
      });
    }
    return weekDays;
  }
  getVeryShortWeekFormat() {
    return this.i18n.getLocaleId().toLowerCase().indexOf("zh") === 0 ? "EEEEE" : "EEEEEE";
  }
  makeBodyRows() {
    const weekRows = [];
    const firstDayOfMonth = this.activeDate.calendarStart({
      weekStartsOn: this.dateHelper.getFirstDayOfWeek()
    });
    for (let week = 0; week < this.MAX_ROW; week++) {
      const weekStart = firstDayOfMonth.addDays(week * 7);
      const row = {
        isActive: false,
        dateCells: [],
        trackByIndex: week
      };
      for (let day = 0; day < 7; day++) {
        const date = weekStart.addDays(day);
        const dateFormat = transCompatFormat(this.i18n.getLocaleData("DatePicker.lang.dateFormat", "YYYY-MM-DD"));
        const title = this.dateHelper.format(date.nativeDate, dateFormat);
        const label = this.dateHelper.format(date.nativeDate, "dd");
        const cell = {
          trackByIndex: day,
          value: date.nativeDate,
          label,
          isSelected: false,
          isDisabled: false,
          isToday: false,
          title,
          cellRender: valueFunctionProp(this.cellRender, date),
          // Customized content
          fullCellRender: valueFunctionProp(this.fullCellRender, date),
          content: `${date.getDate()}`,
          onClick: () => this.changeValueFromInside(date),
          onMouseEnter: () => this.cellHover.emit(date)
        };
        this.addCellProperty(cell, date);
        if (this.showWeek && !row.weekNum) {
          row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
        }
        if (date.isSameDay(this.value)) {
          row.isActive = date.isSameDay(this.value);
        }
        row.dateCells.push(cell);
      }
      row.classMap = {
        [`ant-picker-week-panel-row`]: this.canSelectWeek,
        [`ant-picker-week-panel-row-selected`]: this.canSelectWeek && row.isActive
      };
      weekRows.push(row);
    }
    return weekRows;
  }
  addCellProperty(cell, date) {
    cell.isTemplateRef = isTemplateRef(cell.cellRender);
    cell.isNonEmptyString = isNonEmptyString(cell.cellRender);
    if (this.hasRangeValue() && !this.canSelectWeek) {
      const [startHover, endHover] = this.hoverValue;
      const [startSelected, endSelected] = this.selectedValue;
      if (startSelected?.isSameDay(date)) {
        cell.isSelectedStart = true;
        cell.isSelected = true;
      }
      if (endSelected?.isSameDay(date)) {
        cell.isSelectedEnd = true;
        cell.isSelected = true;
      }
      if (startHover && endHover) {
        cell.isHoverStart = startHover.isSameDay(date);
        cell.isHoverEnd = endHover.isSameDay(date);
        cell.isLastCellInPanel = date.isLastDayOfMonth();
        cell.isFirstCellInPanel = date.isFirstDayOfMonth();
        cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
      }
      cell.isStartSingle = startSelected && !endSelected;
      cell.isEndSingle = !startSelected && endSelected;
      cell.isInSelectedRange = startSelected?.isBeforeDay(date) && date.isBeforeDay(endSelected);
      cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
      cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
    }
    cell.isToday = date.isToday();
    cell.isSelected = date.isSameDay(this.value);
    cell.isDisabled = !!this.disabledDate?.(date.nativeDate);
    cell.classMap = this.getClassMap(cell);
  }
  getClassMap(cell) {
    const date = new CandyDate(cell.value);
    return __spreadProps(__spreadValues({}, super.getClassMap(cell)), {
      [`ant-picker-cell-today`]: !!cell.isToday,
      [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate)
    });
  }
};
_DateTableComponent.ɵfac = function DateTableComponent_Factory(t) {
  return new (t || _DateTableComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(DateHelperService));
};
_DateTableComponent.ɵcmp = ɵɵdefineComponent({
  type: _DateTableComponent,
  selectors: [["date-table"]],
  inputs: {
    locale: "locale"
  },
  exportAs: ["dateTable"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 1,
  consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], ["role", "row"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell"], ["role", "gridcell", 3, "click", "mouseenter", "title", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"]],
  template: function DateTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "table", 0);
      ɵɵtemplate(1, DateTableComponent_Conditional_1_Template, 5, 1, "thead");
      ɵɵelementStart(2, "tbody");
      ɵɵrepeaterCreate(3, DateTableComponent_For_4_Template, 4, 2, "tr", 1, _forTrack0);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(1, ctx.headRow && ctx.headRow.length > 0 ? 1 : -1);
      ɵɵadvance(2);
      ɵɵrepeater(ctx.bodyRows);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var DateTableComponent = _DateTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTableComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "date-table",
      exportAs: "dateTable",
      standalone: true,
      imports: [NgClass, NgSwitch, NgTemplateOutlet],
      template: `<table class="ant-picker-content" cellspacing="0" role="grid">
  @if(headRow && headRow.length > 0) {
    <thead>
      <tr role="row">
        @if(showWeek) {
          <th role="columnheader"></th>
        }
        @for(cell of headRow; track cell) {
          <th role="columnheader" title="{{ cell.title }}"> {{ cell.content }} </th>
        }
      </tr>
    </thead>
  }

  <tbody>
    @for(row of bodyRows; track row.trackByIndex) {
      <tr [ngClass]="row.classMap!" role="row">
        @if(row.weekNum) {
          <td role="gridcell" class="{{ prefixCls }}-cell-week"> {{ row.weekNum }} </td>
        }
        @for(cell of row.dateCells; track cell.trackByIndex) {
          <td
            title="{{ cell.title }}"
            role="gridcell"
            [ngClass]="cell.classMap!"
            (click)="cell.isDisabled ? null : cell.onClick()"
            (mouseenter)="cell.onMouseEnter()"
          >
            @switch (prefixCls) {
              @case('ant-picker') {
                @if(cell.isTemplateRef) {
                  <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }" />
                }@else if(cell.isNonEmptyString) {
                  <span [innerHTML]="cell.cellRender"></span>
                }@else {
                  <div
                    class="{{ prefixCls }}-cell-inner"
                    [attr.aria-selected]="cell.isSelected"
                    [attr.aria-disabled]="cell.isDisabled"
                  >
                    {{ cell.content }}
                  </div>
                }
              }
              @case('ant-picker-calendar') {
                <div
                  class="{{ prefixCls }}-date ant-picker-cell-inner"
                  [class.ant-picker-calendar-date-today]="cell.isToday"
                >
                  @if(cell.fullCellRender) {
                    <ng-container *ngTemplateOutlet="$any(cell.fullCellRender); context: { $implicit: cell.value }" />
                  }@else() {
                    <div class="{{ prefixCls }}-date-value">{{ cell.content }}</div>
                    <div class="{{ prefixCls }}-date-content">
                      <ng-container *ngTemplateOutlet="$any(cell.cellRender); context: { $implicit: cell.value }">
                      </ng-container>
                    </div>
                  }
                </div>
              }
            }
          </td>
        }

      </tr>
    }
  </tbody>
</table>
`
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: DateHelperService
  }], {
    locale: [{
      type: Input
    }]
  });
})();
var _LibPackerModule = class _LibPackerModule {
};
_LibPackerModule.ɵfac = function LibPackerModule_Factory(t) {
  return new (t || _LibPackerModule)();
};
_LibPackerModule.ɵmod = ɵɵdefineNgModule({
  type: _LibPackerModule,
  imports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent],
  exports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent]
});
_LibPackerModule.ɵinj = ɵɵdefineInjector({});
var LibPackerModule = _LibPackerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LibPackerModule, [{
    type: NgModule,
    args: [{
      imports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent],
      exports: [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent]
    }]
  }], null, null);
})();
var _InnerPopupComponent = class _InnerPopupComponent {
  constructor() {
    this.panelModeChange = new EventEmitter();
    this.headerChange = new EventEmitter();
    this.selectDate = new EventEmitter();
    this.selectTime = new EventEmitter();
    this.cellHover = new EventEmitter();
    this.prefixCls = PREFIX_CLASS;
  }
  /**
   * Hide "next" arrow in left panel,
   * hide "prev" arrow in right panel
   *
   * @param direction
   * @param panelMode
   */
  enablePrevNext(direction, panelMode) {
    return !(!this.showTimePicker && panelMode === this.endPanelMode && (this.partType === "left" && direction === "next" || this.partType === "right" && direction === "prev"));
  }
  onSelectTime(date) {
    this.selectTime.emit(new CandyDate(date));
  }
  // The value real changed to outside
  onSelectDate(date) {
    const value = date instanceof CandyDate ? date : new CandyDate(date);
    const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
    if (!this.value && timeValue) {
      value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
    }
    this.selectDate.emit(value);
  }
  onChooseMonth(value) {
    this.activeDate = this.activeDate.setMonth(value.getMonth());
    if (this.endPanelMode === "month") {
      this.value = value;
      this.selectDate.emit(value);
    } else {
      this.headerChange.emit(value);
      this.panelModeChange.emit(this.endPanelMode);
    }
  }
  onChooseYear(value) {
    this.activeDate = this.activeDate.setYear(value.getYear());
    if (this.endPanelMode === "year") {
      this.value = value;
      this.selectDate.emit(value);
    } else {
      this.headerChange.emit(value);
      this.panelModeChange.emit(this.endPanelMode);
    }
  }
  onChooseDecade(value) {
    this.activeDate = this.activeDate.setYear(value.getYear());
    if (this.endPanelMode === "decade") {
      this.value = value;
      this.selectDate.emit(value);
    } else {
      this.headerChange.emit(value);
      this.panelModeChange.emit("year");
    }
  }
  ngOnChanges(changes) {
    if (changes.activeDate && !changes.activeDate.currentValue) {
      this.activeDate = new CandyDate();
    }
    if (changes.panelMode && changes.panelMode.currentValue === "time") {
      this.panelMode = "date";
    }
  }
};
_InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) {
  return new (t || _InnerPopupComponent)();
};
_InnerPopupComponent.ɵcmp = ɵɵdefineComponent({
  type: _InnerPopupComponent,
  selectors: [["inner-popup"]],
  inputs: {
    activeDate: "activeDate",
    endPanelMode: "endPanelMode",
    panelMode: "panelMode",
    showWeek: "showWeek",
    locale: "locale",
    showTimePicker: "showTimePicker",
    timeOptions: "timeOptions",
    disabledDate: "disabledDate",
    dateRender: "dateRender",
    selectedValue: "selectedValue",
    hoverValue: "hoverValue",
    value: "value",
    partType: "partType"
  },
  outputs: {
    panelModeChange: "panelModeChange",
    headerChange: "headerChange",
    selectDate: "selectDate",
    selectTime: "selectTime",
    cellHover: "cellHover"
  },
  exportAs: ["innerPopup"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 7,
  vars: 8,
  consts: [[3, "valueChange", "panelModeChange", "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn"], [3, "valueChange", "activeDate", "value", "locale", "disabledDate"], [3, "valueChange", "cellHover", "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue"], [3, "valueChange", "cellHover", "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue"], [3, "valueChange", "panelModeChange", "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn"], [3, "valueChange", "cellHover", "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "canSelectWeek"], [3, "ngModelChange", "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn"]],
  template: function InnerPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div");
      ɵɵtemplate(2, InnerPopupComponent_Case_2_Template, 3, 13)(3, InnerPopupComponent_Case_3_Template, 3, 15)(4, InnerPopupComponent_Case_4_Template, 3, 15)(5, InnerPopupComponent_Case_5_Template, 3, 18);
      ɵɵelementEnd();
      ɵɵtemplate(6, InnerPopupComponent_Conditional_6_Template, 1, 13, "nz-time-picker-panel");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      ɵɵclassProp("ant-picker-datetime-panel", ctx.showTimePicker);
      ɵɵadvance();
      ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
      ɵɵadvance();
      ɵɵconditional(2, (tmp_2_0 = ctx.panelMode) === "decade" ? 2 : tmp_2_0 === "year" ? 3 : tmp_2_0 === "month" ? 4 : 5);
      ɵɵadvance(4);
      ɵɵconditional(6, ctx.showTimePicker && ctx.timeOptions ? 6 : -1);
    }
  },
  dependencies: [LibPackerModule, DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent, NzTimePickerModule, NzTimePickerPanelComponent, FormsModule, NgControlStatus, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var InnerPopupComponent = _InnerPopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InnerPopupComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "inner-popup",
      exportAs: "innerPopup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        @switch (panelMode) {
          @case ('decade') {
            <decade-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <decade-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              />
            </div>
          }
          @case ('year') {
            <year-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <year-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseYear($event)"
                (cellHover)="cellHover.emit($event)"
              />
            </div>
          }
          @case ('month') {
            <month-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <month-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseMonth($event)"
                (cellHover)="cellHover.emit($event)"
              />
            </div>
          }
          @default {
            <date-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="panelMode === 'week' ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="
                panelMode === 'week' ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')
              "
              [showPreBtn]="panelMode === 'week' ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showNextBtn]="panelMode === 'week' ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            />
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale"
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                [canSelectWeek]="panelMode === 'week'"
                (valueChange)="onSelectDate($event)"
                (cellHover)="cellHover.emit($event)"
              />
            </div>
          }
        }
      </div>
      @if (showTimePicker && timeOptions) {
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        />
      }
    </div>
  `,
      imports: [LibPackerModule, NzTimePickerModule, FormsModule],
      standalone: true
    }]
  }], null, {
    activeDate: [{
      type: Input
    }],
    endPanelMode: [{
      type: Input
    }],
    panelMode: [{
      type: Input
    }],
    showWeek: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showTimePicker: [{
      type: Input
    }],
    timeOptions: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    dateRender: [{
      type: Input
    }],
    selectedValue: [{
      type: Input
    }],
    hoverValue: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    partType: [{
      type: Input
    }],
    panelModeChange: [{
      type: Output
    }],
    headerChange: [{
      type: Output
    }],
    selectDate: [{
      type: Output
    }],
    selectTime: [{
      type: Output
    }],
    cellHover: [{
      type: Output
    }]
  });
})();
var _DateRangePopupComponent = class _DateRangePopupComponent {
  get hasTimePicker() {
    return !!this.showTime;
  }
  get hasFooter() {
    return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
  }
  get arrowPosition() {
    return this.dir === "rtl" ? {
      right: `${this.datePickerService?.arrowLeft}px`
    } : {
      left: `${this.datePickerService?.arrowLeft}px`
    };
  }
  constructor(datePickerService, cdr, ngZone, host) {
    this.datePickerService = datePickerService;
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.host = host;
    this.inline = false;
    this.dir = "ltr";
    this.panelModeChange = new EventEmitter();
    this.calendarChange = new EventEmitter();
    this.resultOk = new EventEmitter();
    this.prefixCls = PREFIX_CLASS;
    this.endPanelMode = "date";
    this.timeOptions = null;
    this.hoverValue = [];
    this.checkedPartArr = [false, false];
    this.destroy$ = new Subject();
    this.disabledStartTime = (value) => this.disabledTime && this.disabledTime(value, "start");
    this.disabledEndTime = (value) => this.disabledTime && this.disabledTime(value, "end");
  }
  ngOnInit() {
    merge(this.datePickerService.valueChange$, this.datePickerService.inputPartChange$).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateActiveDate();
      this.cdr.markForCheck();
    });
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.host.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => event.preventDefault());
    });
  }
  ngOnChanges(changes) {
    if (changes.showTime || changes.disabledTime) {
      if (this.showTime) {
        this.buildTimeOptions();
      }
    }
    if (changes.panelMode) {
      this.endPanelMode = this.panelMode;
    }
    if (changes.defaultPickerValue) {
      this.updateActiveDate();
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  updateActiveDate() {
    const activeDate = this.datePickerService.hasValue() ? this.datePickerService.value : this.datePickerService.makeValue(this.defaultPickerValue);
    this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
  }
  onClickOk() {
    const inputIndex = {
      left: 0,
      right: 1
    }[this.datePickerService.activeInput];
    const value = this.isRange ? this.datePickerService.value[inputIndex] : this.datePickerService.value;
    this.changeValueFromSelect(value);
    this.resultOk.emit();
  }
  onClickToday(value) {
    this.changeValueFromSelect(value, !this.showTime);
  }
  onCellHover(value) {
    if (!this.isRange) {
      return;
    }
    const otherInputIndex = {
      left: 1,
      right: 0
    }[this.datePickerService.activeInput];
    const base = this.datePickerService.value[otherInputIndex];
    if (base) {
      if (base.isBeforeDay(value)) {
        this.hoverValue = [base, value];
      } else {
        this.hoverValue = [value, base];
      }
    }
  }
  onPanelModeChange(mode, partType) {
    if (this.isRange) {
      const index = this.datePickerService.getActiveIndex(partType);
      if (index === 0) {
        this.panelMode = [mode, this.panelMode[1]];
      } else {
        this.panelMode = [this.panelMode[0], mode];
      }
    } else {
      this.panelMode = mode;
    }
    this.panelModeChange.emit(this.panelMode);
  }
  onActiveDateChange(value, partType) {
    if (this.isRange) {
      const activeDate = [];
      activeDate[this.datePickerService.getActiveIndex(partType)] = value;
      this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
    } else {
      this.datePickerService.setActiveDate(value);
    }
  }
  onSelectTime(value, partType) {
    if (this.isRange) {
      const newValue = cloneDate(this.datePickerService.value);
      const index = this.datePickerService.getActiveIndex(partType);
      newValue[index] = this.overrideHms(value, newValue[index]);
      this.datePickerService.setValue(newValue);
    } else {
      const newValue = this.overrideHms(value, this.datePickerService.value);
      this.datePickerService.setValue(newValue);
    }
    this.datePickerService.inputPartChange$.next(null);
    this.buildTimeOptions();
  }
  changeValueFromSelect(value, emitValue = true) {
    if (this.isRange) {
      const selectedValue = cloneDate(this.datePickerService.value);
      const checkedPart = this.datePickerService.activeInput;
      let nextPart = checkedPart;
      selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
      this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
      this.hoverValue = selectedValue;
      if (emitValue) {
        if (this.inline) {
          nextPart = this.reversedPart(checkedPart);
          if (nextPart === "right") {
            selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
            this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
          }
          this.datePickerService.setValue(selectedValue);
          this.calendarChange.emit(selectedValue);
          if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
            this.clearHoverValue();
            this.datePickerService.emitValue$.next();
          }
        } else {
          if (wrongSortOrder(selectedValue)) {
            nextPart = this.reversedPart(checkedPart);
            selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
            this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
          }
          this.datePickerService.setValue(selectedValue);
          if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
            this.calendarChange.emit(selectedValue);
            this.clearHoverValue();
            this.datePickerService.emitValue$.next();
          } else if (this.isAllowed(selectedValue)) {
            nextPart = this.reversedPart(checkedPart);
            this.calendarChange.emit([value.clone()]);
          }
        }
      } else {
        this.datePickerService.setValue(selectedValue);
      }
      this.datePickerService.inputPartChange$.next(nextPart);
    } else {
      this.datePickerService.setValue(value);
      this.datePickerService.inputPartChange$.next(null);
      if (emitValue && this.isAllowed(value)) {
        this.datePickerService.emitValue$.next();
      }
    }
    this.buildTimeOptions();
  }
  reversedPart(part) {
    return part === "left" ? "right" : "left";
  }
  getPanelMode(panelMode, partType) {
    if (this.isRange) {
      return panelMode[this.datePickerService.getActiveIndex(partType)];
    } else {
      return panelMode;
    }
  }
  // Get single value or part value of a range
  getValue(partType) {
    if (this.isRange) {
      return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
    } else {
      return this.datePickerService.value;
    }
  }
  getActiveDate(partType) {
    if (this.isRange) {
      return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
    } else {
      return this.datePickerService.activeDate;
    }
  }
  isOneAllowed(selectedValue) {
    const index = this.datePickerService.getActiveIndex();
    const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
    return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
  }
  isBothAllowed(selectedValue) {
    return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) && isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
  }
  isAllowed(value, isBoth = false) {
    if (this.isRange) {
      return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
    } else {
      return isAllowedDate(value, this.disabledDate, this.disabledTime);
    }
  }
  getTimeOptions(partType) {
    if (this.showTime && this.timeOptions) {
      return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
    }
    return null;
  }
  onClickPresetRange(val) {
    const value = typeof val === "function" ? val() : val;
    if (value) {
      this.datePickerService.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
      this.datePickerService.emitValue$.next();
    }
  }
  onPresetRangeMouseLeave() {
    this.clearHoverValue();
  }
  onHoverPresetRange(val) {
    if (typeof val !== "function") {
      this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
    }
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  show(partType) {
    const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
    return !hide;
  }
  clearHoverValue() {
    this.hoverValue = [];
  }
  buildTimeOptions() {
    if (this.showTime) {
      const showTime = typeof this.showTime === "object" ? this.showTime : {};
      if (this.isRange) {
        const value = this.datePickerService.value;
        this.timeOptions = [this.overrideTimeOptions(showTime, value[0], "start"), this.overrideTimeOptions(showTime, value[1], "end")];
      } else {
        this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
      }
    } else {
      this.timeOptions = null;
    }
  }
  overrideTimeOptions(origin, value, partial) {
    let disabledTimeFn;
    if (partial) {
      disabledTimeFn = partial === "start" ? this.disabledStartTime : this.disabledEndTime;
    } else {
      disabledTimeFn = this.disabledTime;
    }
    return __spreadValues(__spreadValues({}, origin), getTimeConfig(value, disabledTimeFn));
  }
  overrideHms(newValue, oldValue) {
    newValue = newValue || new CandyDate();
    oldValue = oldValue || new CandyDate();
    return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
  }
};
_DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) {
  return new (t || _DateRangePopupComponent)(ɵɵdirectiveInject(DatePickerService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
_DateRangePopupComponent.ɵcmp = ɵɵdefineComponent({
  type: _DateRangePopupComponent,
  selectors: [["date-range-popup"]],
  inputs: {
    isRange: "isRange",
    inline: "inline",
    showWeek: "showWeek",
    locale: "locale",
    disabledDate: "disabledDate",
    disabledTime: "disabledTime",
    showToday: "showToday",
    showNow: "showNow",
    showTime: "showTime",
    extraFooter: "extraFooter",
    ranges: "ranges",
    dateRender: "dateRender",
    panelMode: "panelMode",
    defaultPickerValue: "defaultPickerValue",
    dir: "dir"
  },
  outputs: {
    panelModeChange: "panelModeChange",
    calendarChange: "calendarChange",
    resultOk: "resultOk"
  },
  exportAs: ["dateRangePopup"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 8,
  vars: 1,
  consts: [["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "-1"], [3, "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange", "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue"], [3, "clickOk", "clickToday", "locale", "isRange", "showToday", "showNow", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]],
  template: function DateRangePopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DateRangePopupComponent_Conditional_0_Template, 7, 18, "div")(1, DateRangePopupComponent_Conditional_1_Template, 4, 13)(2, DateRangePopupComponent_ng_template_2_Template, 2, 18, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, DateRangePopupComponent_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, DateRangePopupComponent_ng_template_6_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.isRange ? 0 : 1);
    }
  },
  dependencies: [InnerPopupComponent, NgTemplateOutlet, CalendarFooterComponent],
  encapsulation: 2,
  changeDetection: 0
});
var DateRangePopupComponent = _DateRangePopupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangePopupComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "date-range-popup",
      exportAs: "dateRangePopup",
      template: `
    @if (isRange) {
      <div class="{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper">
        <div class="{{ prefixCls }}-range-arrow" [style]="arrowPosition"></div>
        <div class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }}">
          <div class="{{ prefixCls }}-panels">
            @if (hasTimePicker) {
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: datePickerService.activeInput }" />
            } @else {
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'left' }" />
              <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: 'right' }" />
            }
          </div>
          <ng-container *ngTemplateOutlet="tplFooter" />
        </div>
      </div>
    } @else {
      <div
        class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{
          hasTimePicker ? prefixCls + '-time' : ''
        }} {{ isRange ? prefixCls + '-range' : '' }}"
      >
        <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'" tabindex="-1">
          <!-- Single ONLY -->
          <ng-container *ngTemplateOutlet="tplInnerPopup" />
          <ng-container *ngTemplateOutlet="tplFooter" />
        </div>
      </div>
    }

    <ng-template #tplInnerPopup let-partType="partType">
      <div class="{{ prefixCls }}-panel" [class.ant-picker-panel-rtl]="dir === 'rtl'">
        <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->
        <inner-popup
          [showWeek]="showWeek"
          [endPanelMode]="getPanelMode(endPanelMode, partType)"
          [partType]="partType"
          [locale]="locale!"
          [showTimePicker]="hasTimePicker"
          [timeOptions]="getTimeOptions(partType)"
          [panelMode]="getPanelMode(panelMode, partType)"
          (panelModeChange)="onPanelModeChange($event, partType)"
          [activeDate]="getActiveDate(partType)"
          [value]="getValue(partType)"
          [disabledDate]="disabledDate"
          [dateRender]="dateRender"
          [selectedValue]="$any(datePickerService?.value)"
          [hoverValue]="$any(hoverValue)"
          (cellHover)="onCellHover($event)"
          (selectDate)="changeValueFromSelect($event, !showTime)"
          (selectTime)="onSelectTime($event, partType)"
          (headerChange)="onActiveDateChange($event, partType)"
        />
      </div>
    </ng-template>

    <ng-template #tplFooter>
      @if (hasFooter) {
        <calendar-footer
          [locale]="locale!"
          [isRange]="isRange"
          [showToday]="showToday"
          [showNow]="showNow"
          [hasTimePicker]="hasTimePicker"
          [okDisabled]="!isAllowed($any(datePickerService?.value))"
          [extraFooter]="extraFooter"
          [rangeQuickSelector]="ranges ? tplRangeQuickSelector : null"
          (clickOk)="onClickOk()"
          (clickToday)="onClickToday($event)"
        />
      }
    </ng-template>

    <!-- Range ONLY: Range Quick Selector -->
    <ng-template #tplRangeQuickSelector>
      @for (name of getObjectKeys(ranges); track name) {
        <li
          class="{{ prefixCls }}-preset"
          (click)="onClickPresetRange(ranges![name])"
          (mouseenter)="onHoverPresetRange(ranges![name])"
          (mouseleave)="onPresetRangeMouseLeave()"
        >
          <span class="ant-tag ant-tag-blue">{{ name }}</span>
        </li>
      }
    </ng-template>
  `,
      imports: [InnerPopupComponent, NgTemplateOutlet, CalendarFooterComponent],
      standalone: true
    }]
  }], () => [{
    type: DatePickerService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }], {
    isRange: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    showWeek: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    disabledDate: [{
      type: Input
    }],
    disabledTime: [{
      type: Input
    }],
    showToday: [{
      type: Input
    }],
    showNow: [{
      type: Input
    }],
    showTime: [{
      type: Input
    }],
    extraFooter: [{
      type: Input
    }],
    ranges: [{
      type: Input
    }],
    dateRender: [{
      type: Input
    }],
    panelMode: [{
      type: Input
    }],
    defaultPickerValue: [{
      type: Input
    }],
    dir: [{
      type: Input
    }],
    panelModeChange: [{
      type: Output
    }],
    calendarChange: [{
      type: Output
    }],
    resultOk: [{
      type: Output
    }]
  });
})();
var POPUP_STYLE_PATCH = {
  position: "relative"
};
var NZ_CONFIG_MODULE_NAME = "datePicker";
var _NzDatePickerComponent = class _NzDatePickerComponent {
  get nzShowTime() {
    return this.showTime;
  }
  set nzShowTime(value) {
    this.showTime = typeof value === "object" ? value : toBoolean(value);
  }
  get realOpenState() {
    return this.isOpenHandledByUser() ? !!this.nzOpen : this.overlayOpen;
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
    if (this.isRange && this.platform.isBrowser) {
      this.nzResizeObserver.observe(this.elementRef).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.updateInputWidthAndArrowLeft();
      });
    }
    this.datePickerService.inputPartChange$.pipe(takeUntil(this.destroy$)).subscribe((partType) => {
      if (partType) {
        this.datePickerService.activeInput = partType;
      }
      this.focus();
      this.updateInputWidthAndArrowLeft();
    });
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => (
        // prevent mousedown event to trigger focusout event when click in date picker
        // see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/7450
        fromEvent(this.elementRef.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
          if (event.target.tagName.toLowerCase() !== "input") {
            event.preventDefault();
          }
        })
      ));
    }
  }
  updateInputWidthAndArrowLeft() {
    this.inputWidth = this.rangePickerInputs?.first?.nativeElement.offsetWidth || 0;
    const baseStyle = {
      position: "absolute",
      width: `${this.inputWidth}px`
    };
    this.datePickerService.arrowLeft = this.datePickerService.activeInput === "left" ? 0 : this.inputWidth + this.separatorElement?.nativeElement.offsetWidth || 0;
    if (this.dir === "rtl") {
      this.activeBarStyle = __spreadProps(__spreadValues({}, baseStyle), {
        right: `${this.datePickerService.arrowLeft}px`
      });
    } else {
      this.activeBarStyle = __spreadProps(__spreadValues({}, baseStyle), {
        left: `${this.datePickerService.arrowLeft}px`
      });
    }
    this.cdr.markForCheck();
  }
  getInput(partType) {
    if (this.nzInline) {
      return void 0;
    }
    return this.isRange ? partType === "left" ? this.rangePickerInputs?.first.nativeElement : this.rangePickerInputs?.last.nativeElement : this.pickerInput.nativeElement;
  }
  focus() {
    const activeInputElement = this.getInput(this.datePickerService.activeInput);
    if (this.document.activeElement !== activeInputElement) {
      activeInputElement?.focus();
    }
  }
  onFocus(event, partType) {
    event.preventDefault();
    if (partType) {
      this.datePickerService.inputPartChange$.next(partType);
    }
    this.renderClass(true);
  }
  // blur event has not the relatedTarget in IE11, use focusout instead.
  onFocusout(event) {
    event.preventDefault();
    this.onTouchedFn();
    if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.checkAndClose();
    }
    this.renderClass(false);
  }
  // Show overlay content
  open() {
    if (this.nzInline) {
      return;
    }
    if (!this.realOpenState && !this.nzDisabled) {
      this.updateInputWidthAndArrowLeft();
      this.overlayOpen = true;
      this.nzOnOpenChange.emit(true);
      this.focus();
      this.cdr.markForCheck();
    }
  }
  close() {
    if (this.nzInline) {
      return;
    }
    if (this.realOpenState) {
      this.overlayOpen = false;
      this.nzOnOpenChange.emit(false);
    }
  }
  get showClear() {
    return !this.nzDisabled && !this.isEmptyValue(this.datePickerService.value) && this.nzAllowClear;
  }
  checkAndClose() {
    if (!this.realOpenState) {
      return;
    }
    if (this.panel.isAllowed(this.datePickerService.value, true)) {
      if (Array.isArray(this.datePickerService.value) && wrongSortOrder(this.datePickerService.value)) {
        const index = this.datePickerService.getActiveIndex();
        const value = this.datePickerService.value[index];
        this.panel.changeValueFromSelect(value, true);
        return;
      }
      this.updateInputValue();
      this.datePickerService.emitValue$.next();
    } else {
      this.datePickerService.setValue(this.datePickerService.initialValue);
      this.close();
    }
  }
  onClickInputBox(event) {
    event.stopPropagation();
    this.focus();
    if (!this.isOpenHandledByUser()) {
      this.open();
    }
  }
  onOverlayKeydown(event) {
    if (event.keyCode === ESCAPE) {
      this.datePickerService.initValue();
    }
  }
  // NOTE: A issue here, the first time position change, the animation will not be triggered.
  // Because the overlay's "positionChange" event is emitted after the content's full shown up.
  // All other components like "nz-dropdown" which depends on overlay also has the same issue.
  // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
  onPositionChange(position) {
    this.currentPositionX = position.connectionPair.originX;
    this.currentPositionY = position.connectionPair.originY;
    this.cdr.detectChanges();
  }
  onClickClear(event) {
    event.preventDefault();
    event.stopPropagation();
    this.datePickerService.initValue(true);
    this.datePickerService.emitValue$.next();
  }
  updateInputValue() {
    const newValue = this.datePickerService.value;
    if (this.isRange) {
      this.inputValue = newValue ? newValue.map((v) => this.formatValue(v)) : ["", ""];
    } else {
      this.inputValue = this.formatValue(newValue);
    }
    this.cdr.markForCheck();
  }
  formatValue(value) {
    return this.dateHelper.format(value && value.nativeDate, this.nzFormat);
  }
  onInputChange(value, isEnter = false) {
    if (!this.platform.TRIDENT && this.document.activeElement === this.getInput(this.datePickerService.activeInput) && !this.realOpenState) {
      this.open();
      return;
    }
    const date = this.checkValidDate(value);
    if (date && this.realOpenState) {
      this.panel.changeValueFromSelect(date, isEnter);
    }
  }
  onKeyupEnter(event) {
    this.onInputChange(event.target.value, true);
  }
  checkValidDate(value) {
    const date = new CandyDate(this.dateHelper.parseDate(value, this.nzFormat));
    if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.nzFormat)) {
      return null;
    }
    return date;
  }
  getPlaceholder(partType) {
    return this.isRange ? this.nzPlaceHolder[this.datePickerService.getActiveIndex(partType)] : this.nzPlaceHolder;
  }
  isEmptyValue(value) {
    if (value === null) {
      return true;
    } else if (this.isRange) {
      return !value || !Array.isArray(value) || value.every((val) => !val);
    } else {
      return !value;
    }
  }
  // Whether open state is permanently controlled by user himself
  isOpenHandledByUser() {
    return this.nzOpen !== void 0;
  }
  // ------------------------------------------------------------------------
  // Input API End
  // ------------------------------------------------------------------------
  constructor(nzConfigService, datePickerService, i18n, cdr, renderer, ngZone, elementRef, dateHelper, nzResizeObserver, platform, destroy$, doc, directionality, noAnimation, nzFormStatusService, nzFormNoStatusService) {
    this.nzConfigService = nzConfigService;
    this.datePickerService = datePickerService;
    this.i18n = i18n;
    this.cdr = cdr;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.dateHelper = dateHelper;
    this.nzResizeObserver = nzResizeObserver;
    this.platform = platform;
    this.destroy$ = destroy$;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.isRange = false;
    this.dir = "ltr";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.panelMode = "date";
    this.isCustomPlaceHolder = false;
    this.isCustomFormat = false;
    this.showTime = false;
    this.isNzDisableFirstChange = true;
    this.nzAllowClear = true;
    this.nzAutoFocus = false;
    this.nzDisabled = false;
    this.nzBorderless = false;
    this.nzInputReadOnly = false;
    this.nzInline = false;
    this.nzPlaceHolder = "";
    this.nzPopupStyle = POPUP_STYLE_PATCH;
    this.nzSize = "default";
    this.nzStatus = "";
    this.nzShowToday = true;
    this.nzMode = "date";
    this.nzShowNow = true;
    this.nzDefaultPickerValue = null;
    this.nzSeparator = void 0;
    this.nzSuffixIcon = "calendar";
    this.nzBackdrop = false;
    this.nzId = null;
    this.nzPlacement = "bottomLeft";
    this.nzShowWeekNumber = false;
    this.nzOnPanelChange = new EventEmitter();
    this.nzOnCalendarChange = new EventEmitter();
    this.nzOnOk = new EventEmitter();
    this.nzOnOpenChange = new EventEmitter();
    this.inputSize = 12;
    this.prefixCls = PREFIX_CLASS;
    this.activeBarStyle = {};
    this.overlayOpen = false;
    this.overlayPositions = [...DEFAULT_DATE_PICKER_POSITIONS];
    this.currentPositionX = "start";
    this.currentPositionY = "bottom";
    this.onChangeFn = () => void 0;
    this.onTouchedFn = () => void 0;
    this.document = doc;
    this.origin = new CdkOverlayOrigin(this.elementRef);
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    if (!this.nzLocale) {
      this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => this.setLocale());
    }
    this.datePickerService.isRange = this.isRange;
    this.datePickerService.initValue(true);
    this.datePickerService.emitValue$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const granularityComparaison = this.showTime ? "second" : "day";
      const value = this.datePickerService.value;
      const datePickerPreviousValue = this.datePickerService.initialValue;
      if (!this.isRange && value?.isSame(datePickerPreviousValue?.nativeDate, granularityComparaison)) {
        this.onTouchedFn();
        return this.close();
      }
      if (this.isRange) {
        const [previousStartDate, previousEndDate] = datePickerPreviousValue;
        const [currentStartDate, currentEndDate] = value;
        if (previousStartDate?.isSame(currentStartDate?.nativeDate, granularityComparaison) && previousEndDate?.isSame(currentEndDate?.nativeDate, granularityComparaison)) {
          this.onTouchedFn();
          return this.close();
        }
      }
      this.datePickerService.initialValue = cloneDate(value);
      if (this.isRange) {
        const vAsRange = value;
        if (vAsRange.length) {
          this.onChangeFn([vAsRange[0]?.nativeDate ?? null, vAsRange[1]?.nativeDate ?? null]);
        } else {
          this.onChangeFn([]);
        }
      } else {
        if (value) {
          this.onChangeFn(value.nativeDate);
        } else {
          this.onChangeFn(null);
        }
      }
      this.onTouchedFn();
      this.close();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.inputValue = this.isRange ? ["", ""] : "";
    this.setModeAndFormat();
    this.datePickerService.valueChange$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateInputValue();
    });
  }
  ngOnChanges(changes) {
    const {
      nzStatus,
      nzPlacement
    } = changes;
    if (changes.nzPopupStyle) {
      this.nzPopupStyle = this.nzPopupStyle ? __spreadValues(__spreadValues({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
    }
    if (changes.nzPlaceHolder?.currentValue) {
      this.isCustomPlaceHolder = true;
    }
    if (changes.nzFormat?.currentValue) {
      this.isCustomFormat = true;
    }
    if (changes.nzLocale) {
      this.setDefaultPlaceHolder();
    }
    if (changes.nzRenderExtraFooter) {
      this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
    }
    if (changes.nzMode) {
      this.setDefaultPlaceHolder();
      this.setModeAndFormat();
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzPlacement) {
      this.setPlacement(this.nzPlacement);
    }
  }
  setModeAndFormat() {
    const inputFormats = {
      year: "yyyy",
      month: "yyyy-MM",
      week: "YYYY-ww",
      date: this.nzShowTime ? "yyyy-MM-dd HH:mm:ss" : "yyyy-MM-dd"
    };
    if (!this.nzMode) {
      this.nzMode = "date";
    }
    this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode;
    if (!this.isCustomFormat) {
      this.nzFormat = inputFormats[this.nzMode];
    }
    this.inputSize = Math.max(10, this.nzFormat.length) + 2;
    this.updateInputValue();
  }
  /**
   * Triggered when overlayOpen changes (different with realOpenState)
   *
   * @param open The overlayOpen in picker component
   */
  onOpenChange(open) {
    this.nzOnOpenChange.emit(open);
  }
  writeValue(value) {
    this.setValue(value);
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.cdr.markForCheck();
    this.isNzDisableFirstChange = false;
  }
  // ------------------------------------------------------------------------
  // | Internal methods
  // ------------------------------------------------------------------------
  // Reload locale from i18n with side effects
  setLocale() {
    this.nzLocale = this.i18n.getLocaleData("DatePicker", {});
    this.setDefaultPlaceHolder();
    this.cdr.markForCheck();
  }
  setDefaultPlaceHolder() {
    if (!this.isCustomPlaceHolder && this.nzLocale) {
      const defaultPlaceholder = {
        year: this.getPropertyOfLocale("yearPlaceholder"),
        month: this.getPropertyOfLocale("monthPlaceholder"),
        week: this.getPropertyOfLocale("weekPlaceholder"),
        date: this.getPropertyOfLocale("placeholder")
      };
      const defaultRangePlaceholder = {
        year: this.getPropertyOfLocale("rangeYearPlaceholder"),
        month: this.getPropertyOfLocale("rangeMonthPlaceholder"),
        week: this.getPropertyOfLocale("rangeWeekPlaceholder"),
        date: this.getPropertyOfLocale("rangePlaceholder")
      };
      this.nzPlaceHolder = this.isRange ? defaultRangePlaceholder[this.nzMode] : defaultPlaceholder[this.nzMode];
    }
  }
  getPropertyOfLocale(type) {
    return this.nzLocale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
  }
  // Safe way of setting value with default
  setValue(value) {
    const newValue = this.datePickerService.makeValue(value);
    this.datePickerService.setValue(newValue);
    this.datePickerService.initialValue = cloneDate(newValue);
    this.cdr.detectChanges();
  }
  renderClass(value) {
    if (value) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-picker-focused");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-picker-focused");
    }
  }
  onPanelModeChange(panelMode) {
    this.nzOnPanelChange.emit(panelMode);
  }
  // Emit nzOnCalendarChange when select date by nz-range-picker
  onCalendarChange(value) {
    if (this.isRange && Array.isArray(value)) {
      const rangeValue = value.filter((x) => x instanceof CandyDate).map((x) => x.nativeDate);
      this.nzOnCalendarChange.emit(rangeValue);
    }
  }
  onResultOk() {
    if (this.isRange) {
      const value = this.datePickerService.value;
      if (value.length) {
        this.nzOnOk.emit([value[0]?.nativeDate || null, value[1]?.nativeDate || null]);
      } else {
        this.nzOnOk.emit([]);
      }
    } else {
      if (this.datePickerService.value) {
        this.nzOnOk.emit(this.datePickerService.value.nativeDate);
      } else {
        this.nzOnOk.emit(null);
      }
    }
  }
  // status
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
  setPlacement(placement) {
    const position = DATE_PICKER_POSITION_MAP[placement];
    this.overlayPositions = [position, ...DEFAULT_DATE_PICKER_POSITIONS];
    this.currentPositionX = position.originX;
    this.currentPositionY = position.originY;
  }
};
_NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) {
  return new (t || _NzDatePickerComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(DatePickerService), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzDatePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDatePickerComponent,
  selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-year-picker"], ["nz-range-picker"]],
  viewQuery: function NzDatePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkConnectedOverlay, 5);
      ɵɵviewQuery(DateRangePopupComponent, 5);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.separatorElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.pickerInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rangePickerInputs = _t);
    }
  },
  hostVars: 16,
  hostBindings: function NzDatePickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzDatePickerComponent_click_HostBindingHandler($event) {
        return ctx.onClickInputBox($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("ant-picker", true)("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless)("ant-picker-inline", ctx.nzInline);
    }
  },
  inputs: {
    nzAllowClear: "nzAllowClear",
    nzAutoFocus: "nzAutoFocus",
    nzDisabled: "nzDisabled",
    nzBorderless: "nzBorderless",
    nzInputReadOnly: "nzInputReadOnly",
    nzInline: "nzInline",
    nzOpen: "nzOpen",
    nzDisabledDate: "nzDisabledDate",
    nzLocale: "nzLocale",
    nzPlaceHolder: "nzPlaceHolder",
    nzPopupStyle: "nzPopupStyle",
    nzDropdownClassName: "nzDropdownClassName",
    nzSize: "nzSize",
    nzStatus: "nzStatus",
    nzFormat: "nzFormat",
    nzDateRender: "nzDateRender",
    nzDisabledTime: "nzDisabledTime",
    nzRenderExtraFooter: "nzRenderExtraFooter",
    nzShowToday: "nzShowToday",
    nzMode: "nzMode",
    nzShowNow: "nzShowNow",
    nzRanges: "nzRanges",
    nzDefaultPickerValue: "nzDefaultPickerValue",
    nzSeparator: "nzSeparator",
    nzSuffixIcon: "nzSuffixIcon",
    nzBackdrop: "nzBackdrop",
    nzId: "nzId",
    nzPlacement: "nzPlacement",
    nzShowWeekNumber: "nzShowWeekNumber",
    nzShowTime: "nzShowTime"
  },
  outputs: {
    nzOnPanelChange: "nzOnPanelChange",
    nzOnCalendarChange: "nzOnCalendarChange",
    nzOnOk: "nzOnOk",
    nzOnOpenChange: "nzOnOpenChange"
  },
  exportAs: ["nzDatePicker"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService, DatePickerService, {
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => _NzDatePickerComponent)
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 6,
  consts: [["tplRangeInput", ""], ["tplRightRest", ""], ["inlineMode", ""], ["pickerInput", ""], ["separatorElement", ""], ["rangePickerInput", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "positionChange", "detach", "overlayKeydown", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn"], ["autocomplete", "off", 3, "ngModelChange", "focus", "focusout", "keyup.enter", "disabled", "readOnly", "ngModel", "placeholder", "size"], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "ngTemplateOutlet"], ["autocomplete", "off", 3, "click", "focusout", "focus", "keyup.enter", "ngModelChange", "disabled", "readOnly", "size", "ngModel", "placeholder"], [3, "ngStyle"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [3, "status"], [3, "panelModeChange", "calendarChange", "resultOk", "isRange", "inline", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showNow", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "dir"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"]],
  template: function NzDatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵtemplate(0, NzDatePickerComponent_Conditional_0_Template, 2, 1)(1, NzDatePickerComponent_Conditional_1_Template, 1, 1)(2, NzDatePickerComponent_ng_template_2_Template, 2, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, NzDatePickerComponent_ng_template_4_Template, 5, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, NzDatePickerComponent_ng_template_6_Template, 2, 36, "ng-template", null, 2, ɵɵtemplateRefExtractor)(8, NzDatePickerComponent_ng_template_8_Template, 2, 3, "ng-template", 6);
      ɵɵlistener("positionChange", function NzDatePickerComponent_Template_ng_template_positionChange_8_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPositionChange($event));
      })("detach", function NzDatePickerComponent_Template_ng_template_detach_8_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.close());
      })("overlayKeydown", function NzDatePickerComponent_Template_ng_template_overlayKeydown_8_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onOverlayKeydown($event));
      });
    }
    if (rf & 2) {
      ɵɵconditional(0, !ctx.nzInline ? 0 : 1);
      ɵɵadvance(8);
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgTemplateOutlet, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NgStyle, NzFormPatchModule, NzFormItemFeedbackIconComponent, DateRangePopupComponent, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzNoAnimationDirective],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzDatePickerComponent = _NzDatePickerComponent;
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzBorderless", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzInline", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzOpen", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzShowToday", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzShowNow", void 0);
__decorate([WithConfig()], NzDatePickerComponent.prototype, "nzSeparator", void 0);
__decorate([WithConfig()], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
__decorate([WithConfig()], NzDatePickerComponent.prototype, "nzBackdrop", void 0);
__decorate([InputBoolean()], NzDatePickerComponent.prototype, "nzShowWeekNumber", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDatePickerComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker",
      exportAs: "nzDatePicker",
      template: `
    @if (!nzInline) {
      @if (!isRange) {
        <div class="{{ prefixCls }}-input">
          <input
            #pickerInput
            [attr.id]="nzId"
            [class.ant-input-disabled]="nzDisabled"
            [disabled]="nzDisabled"
            [readOnly]="nzInputReadOnly"
            [(ngModel)]="inputValue"
            placeholder="{{ getPlaceholder() }}"
            [size]="inputSize"
            autocomplete="off"
            (focus)="onFocus($event)"
            (focusout)="onFocusout($event)"
            (ngModelChange)="onInputChange($event)"
            (keyup.enter)="onKeyupEnter($event)"
          />
          <ng-container *ngTemplateOutlet="tplRightRest" />
        </div>
      } @else {
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }" />
        </div>
        <div #separatorElement class="{{ prefixCls }}-range-separator">
          <span class="{{ prefixCls }}-separator">
            <ng-container *nzStringTemplateOutlet="nzSeparator; let separator">
              @if (nzSeparator) {
                {{ nzSeparator }}
              } @else {
                <span nz-icon nzType="swap-right" nzTheme="outline"></span>
              }
            </ng-container>
          </span>
        </div>
        <div class="{{ prefixCls }}-input">
          <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }" />
        </div>
        <ng-container *ngTemplateOutlet="tplRightRest" />
      }
    } @else {
      <ng-template [ngTemplateOutlet]="inlineMode" />
    }
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [attr.id]="nzId"
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        [size]="inputSize"
        autocomplete="off"
        (click)="onClickInputBox($event)"
        (focusout)="onFocusout($event)"
        (focus)="onFocus($event, partType)"
        (keyup.enter)="onKeyupEnter($event)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        (ngModelChange)="onInputChange($event)"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div class="{{ prefixCls }}-active-bar" [ngStyle]="activeBarStyle"></div>
      @if (showClear) {
        <span class="{{ prefixCls }}-clear" (click)="onClickClear($event)">
          <span nz-icon nzType="close-circle" nzTheme="fill"></span>
        </span>
      }

      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <span nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
        @if (hasFeedback && !!status) {
          <nz-form-item-feedback-icon [status]="status" />
        }
      </span>
    </ng-template>

    <ng-template #inlineMode>
      <div
        class="{{ prefixCls }}-dropdown {{ nzDropdownClassName }}"
        [class.ant-picker-dropdown-rtl]="dir === 'rtl'"
        [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
        [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
        [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
        [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
        [class.ant-picker-dropdown-range]="isRange"
        [class.ant-picker-active-left]="datePickerService.activeInput === 'left'"
        [class.ant-picker-active-right]="datePickerService.activeInput === 'right'"
        [ngStyle]="nzPopupStyle"
      >
        <date-range-popup
          [isRange]="isRange"
          [inline]="nzInline"
          [defaultPickerValue]="nzDefaultPickerValue"
          [showWeek]="nzShowWeekNumber || nzMode === 'week'"
          [panelMode]="panelMode"
          (panelModeChange)="onPanelModeChange($event)"
          (calendarChange)="onCalendarChange($event)"
          [locale]="nzLocale?.lang!"
          [showToday]="nzMode === 'date' && nzShowToday && !isRange && !nzShowTime"
          [showNow]="nzMode === 'date' && nzShowNow && !isRange && !!nzShowTime"
          [showTime]="nzShowTime"
          [dateRender]="nzDateRender"
          [disabledDate]="nzDisabledDate"
          [disabledTime]="nzDisabledTime"
          [extraFooter]="extraFooter"
          [ranges]="nzRanges"
          [dir]="dir"
          (resultOk)="onResultOk()"
        />
      </div>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (detach)="close()"
      (overlayKeydown)="onOverlayKeydown($event)"
    >
      <div
        class="ant-picker-wrapper"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation"
        [@slideMotion]="'enter'"
        style="position: relative;"
      >
        <ng-container *ngTemplateOutlet="inlineMode"></ng-container>
      </div>
    </ng-template>
  `,
      host: {
        "[class.ant-picker]": `true`,
        "[class.ant-picker-range]": `isRange`,
        "[class.ant-picker-large]": `nzSize === 'large'`,
        "[class.ant-picker-small]": `nzSize === 'small'`,
        "[class.ant-picker-disabled]": `nzDisabled`,
        "[class.ant-picker-rtl]": `dir === 'rtl'`,
        "[class.ant-picker-borderless]": `nzBorderless`,
        "[class.ant-picker-inline]": `nzInline`,
        "(click)": "onClickInputBox($event)"
      },
      providers: [NzDestroyService, DatePickerService, {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => NzDatePickerComponent)
      }],
      animations: [slideMotion],
      imports: [FormsModule, NgTemplateOutlet, NzOutletModule, NzIconModule, NgStyle, NzFormPatchModule, DateRangePopupComponent, CdkConnectedOverlay, NzOverlayModule, NzNoAnimationDirective],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: DatePickerService
  }, {
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: DateHelperService
  }, {
    type: NzResizeObserver
  }, {
    type: Platform
  }, {
    type: NzDestroyService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAllowClear: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzBorderless: [{
      type: Input
    }],
    nzInputReadOnly: [{
      type: Input
    }],
    nzInline: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzDisabledDate: [{
      type: Input
    }],
    nzLocale: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzPopupStyle: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzDateRender: [{
      type: Input
    }],
    nzDisabledTime: [{
      type: Input
    }],
    nzRenderExtraFooter: [{
      type: Input
    }],
    nzShowToday: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzShowNow: [{
      type: Input
    }],
    nzRanges: [{
      type: Input
    }],
    nzDefaultPickerValue: [{
      type: Input
    }],
    nzSeparator: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzShowWeekNumber: [{
      type: Input
    }],
    nzOnPanelChange: [{
      type: Output
    }],
    nzOnCalendarChange: [{
      type: Output
    }],
    nzOnOk: [{
      type: Output
    }],
    nzOnOpenChange: [{
      type: Output
    }],
    nzShowTime: [{
      type: Input
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    panel: [{
      type: ViewChild,
      args: [DateRangePopupComponent, {
        static: false
      }]
    }],
    separatorElement: [{
      type: ViewChild,
      args: ["separatorElement", {
        static: false
      }]
    }],
    pickerInput: [{
      type: ViewChild,
      args: ["pickerInput", {
        static: false
      }]
    }],
    rangePickerInputs: [{
      type: ViewChildren,
      args: ["rangePickerInput"]
    }]
  });
})();
var _NzMonthPickerComponent = class _NzMonthPickerComponent {
  constructor(datePicker) {
    this.datePicker = datePicker;
    this.datePicker.nzMode = "month";
  }
};
_NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) {
  return new (t || _NzMonthPickerComponent)(ɵɵdirectiveInject(NzDatePickerComponent, 9));
};
_NzMonthPickerComponent.ɵdir = ɵɵdefineDirective({
  type: _NzMonthPickerComponent,
  selectors: [["nz-month-picker"]],
  exportAs: ["nzMonthPicker"],
  standalone: true
});
var NzMonthPickerComponent = _NzMonthPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMonthPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-month-picker",
      exportAs: "nzMonthPicker",
      standalone: true
    }]
  }], () => [{
    type: NzDatePickerComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], null);
})();
var _NzRangePickerComponent = class _NzRangePickerComponent {
  constructor(datePicker) {
    this.datePicker = datePicker;
    this.datePicker.isRange = true;
  }
};
_NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) {
  return new (t || _NzRangePickerComponent)(ɵɵdirectiveInject(NzDatePickerComponent, 9));
};
_NzRangePickerComponent.ɵdir = ɵɵdefineDirective({
  type: _NzRangePickerComponent,
  selectors: [["nz-range-picker"]],
  exportAs: ["nzRangePicker"],
  standalone: true
});
var NzRangePickerComponent = _NzRangePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRangePickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-range-picker",
      exportAs: "nzRangePicker",
      standalone: true
    }]
  }], () => [{
    type: NzDatePickerComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], null);
})();
var _NzWeekPickerComponent = class _NzWeekPickerComponent {
  constructor(datePicker) {
    this.datePicker = datePicker;
    this.datePicker.nzMode = "week";
  }
};
_NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) {
  return new (t || _NzWeekPickerComponent)(ɵɵdirectiveInject(NzDatePickerComponent, 9));
};
_NzWeekPickerComponent.ɵdir = ɵɵdefineDirective({
  type: _NzWeekPickerComponent,
  selectors: [["nz-week-picker"]],
  exportAs: ["nzWeekPicker"],
  standalone: true
});
var NzWeekPickerComponent = _NzWeekPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWeekPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-week-picker",
      exportAs: "nzWeekPicker",
      standalone: true
    }]
  }], () => [{
    type: NzDatePickerComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], null);
})();
var _NzYearPickerComponent = class _NzYearPickerComponent {
  constructor(datePicker) {
    this.datePicker = datePicker;
    this.datePicker.nzMode = "year";
  }
};
_NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) {
  return new (t || _NzYearPickerComponent)(ɵɵdirectiveInject(NzDatePickerComponent, 9));
};
_NzYearPickerComponent.ɵdir = ɵɵdefineDirective({
  type: _NzYearPickerComponent,
  selectors: [["nz-year-picker"]],
  exportAs: ["nzYearPicker"],
  standalone: true
});
var NzYearPickerComponent = _NzYearPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzYearPickerComponent, [{
    type: Directive,
    args: [{
      selector: "nz-year-picker",
      exportAs: "nzYearPicker",
      standalone: true
    }]
  }], () => [{
    type: NzDatePickerComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], null);
})();
var _NzDatePickerModule = class _NzDatePickerModule {
};
_NzDatePickerModule.ɵfac = function NzDatePickerModule_Factory(t) {
  return new (t || _NzDatePickerModule)();
};
_NzDatePickerModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDatePickerModule,
  imports: [NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent],
  exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent]
});
_NzDatePickerModule.ɵinj = ɵɵdefineInjector({
  imports: [NzDatePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent]
});
var NzDatePickerModule = _NzDatePickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent],
      exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent]
    }]
  }], null, null);
})();

export {
  PREFIX_CLASS,
  getTimeConfig,
  isTimeValidByConfig,
  isTimeValid,
  isAllowedDate,
  transCompatFormat,
  CalendarFooterComponent,
  DatePickerService,
  AbstractPanelHeader,
  DecadeHeaderComponent,
  AbstractTable,
  DecadeTableComponent,
  YearHeaderComponent,
  YearTableComponent,
  MonthHeaderComponent,
  MonthTableComponent,
  DateHeaderComponent,
  DateTableComponent,
  LibPackerModule,
  InnerPopupComponent,
  DateRangePopupComponent,
  NzDatePickerComponent,
  NzMonthPickerComponent,
  NzRangePickerComponent,
  NzWeekPickerComponent,
  NzYearPickerComponent,
  NzDatePickerModule
};
//# sourceMappingURL=chunk-OGDQS4QW.js.map
