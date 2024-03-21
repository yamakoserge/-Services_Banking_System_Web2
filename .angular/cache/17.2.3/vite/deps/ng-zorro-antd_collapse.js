import {
  NzDestroyService
} from "./chunk-SI4TRZI4.js";
import "./chunk-BYTT75NY.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-PNWLZHN6.js";
import "./chunk-UOAILW34.js";
import {
  NzNoAnimationDirective
} from "./chunk-PINZ62BN.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-HIDZGXHW.js";
import {
  collapseMotion
} from "./chunk-U36P7SMJ.js";
import {
  Directionality
} from "./chunk-234HVI5C.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-YXWFO5RT.js";
import {
  InputBoolean
} from "./chunk-3SUK7U6J.js";
import "./chunk-MENCVGYP.js";
import "./chunk-XUZQ2ZDM.js";
import "./chunk-WVQPIBOJ.js";
import "./chunk-OYTAYSJ2.js";
import "./chunk-BZMTTGPA.js";
import "./chunk-EPXBI2CD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Host,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-OVN7IZ6V.js";
import {
  __decorate,
  filter,
  fromEvent,
  takeUntil
} from "./chunk-JKR55PDT.js";
import "./chunk-X6JV76XL.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-collapse.mjs
var _c0 = ["*"];
var _c1 = ["collapseHeader"];
function NzCollapsePanelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const expandedIcon_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("nzType", expandedIcon_r1 || "right")("nzRotate", ctx_r1.nzActive ? 90 : 0);
  }
}
function NzCollapsePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
  }
}
function NzCollapsePanelComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzHeader);
  }
}
function NzCollapsePanelComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.nzExtra);
  }
}
function NzCollapsePanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, NzCollapsePanelComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
var NZ_CONFIG_MODULE_NAME$1 = "collapse";
var _NzCollapseComponent = class _NzCollapseComponent {
  constructor(nzConfigService, cdr, directionality, destroy$) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    this.nzAccordion = false;
    this.nzBordered = true;
    this.nzGhost = false;
    this.nzExpandIconPosition = "left";
    this.dir = "ltr";
    this.listOfNzCollapsePanelComponent = [];
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  addPanel(value) {
    this.listOfNzCollapsePanelComponent.push(value);
  }
  removePanel(value) {
    this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
  }
  click(collapse) {
    if (this.nzAccordion && !collapse.nzActive) {
      this.listOfNzCollapsePanelComponent.filter((item) => item !== collapse).forEach((item) => {
        if (item.nzActive) {
          item.nzActive = false;
          item.nzActiveChange.emit(item.nzActive);
          item.markForCheck();
        }
      });
    }
    collapse.nzActive = !collapse.nzActive;
    collapse.nzActiveChange.emit(collapse.nzActive);
  }
};
_NzCollapseComponent.ɵfac = function NzCollapseComponent_Factory(t) {
  return new (t || _NzCollapseComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzDestroyService));
};
_NzCollapseComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCollapseComponent,
  selectors: [["nz-collapse"]],
  hostAttrs: [1, "ant-collapse"],
  hostVars: 10,
  hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-collapse-icon-position-left", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-right", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAccordion: "nzAccordion",
    nzBordered: "nzBordered",
    nzGhost: "nzGhost",
    nzExpandIconPosition: "nzExpandIconPosition"
  },
  exportAs: ["nzCollapse"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCollapseComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzCollapseComponent = _NzCollapseComponent;
__decorate([WithConfig(), InputBoolean()], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([WithConfig(), InputBoolean()], NzCollapseComponent.prototype, "nzBordered", void 0);
__decorate([WithConfig(), InputBoolean()], NzCollapseComponent.prototype, "nzGhost", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse",
      exportAs: "nzCollapse",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-collapse",
        "[class.ant-collapse-icon-position-left]": `nzExpandIconPosition === 'left'`,
        "[class.ant-collapse-icon-position-right]": `nzExpandIconPosition === 'right'`,
        "[class.ant-collapse-ghost]": `nzGhost`,
        "[class.ant-collapse-borderless]": "!nzBordered",
        "[class.ant-collapse-rtl]": "dir === 'rtl'"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }], {
    nzAccordion: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzExpandIconPosition: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "collapsePanel";
var _NzCollapsePanelComponent = class _NzCollapsePanelComponent {
  markForCheck() {
    this.cdr.markForCheck();
  }
  constructor(nzConfigService, ngZone, cdr, destroy$, nzCollapseComponent, noAnimation) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this.nzCollapseComponent = nzCollapseComponent;
    this.noAnimation = noAnimation;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzActive = false;
    this.nzDisabled = false;
    this.nzShowArrow = true;
    this.nzActiveChange = new EventEmitter();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.nzCollapseComponent.addPanel(this);
    this.ngZone.runOutsideAngular(() => fromEvent(this.collapseHeader.nativeElement, "click").pipe(filter(() => !this.nzDisabled), takeUntil(this.destroy$)).subscribe(() => {
      this.ngZone.run(() => {
        this.nzCollapseComponent.click(this);
        this.cdr.markForCheck();
      });
    }));
  }
  ngOnDestroy() {
    this.nzCollapseComponent.removePanel(this);
  }
};
_NzCollapsePanelComponent.ɵfac = function NzCollapsePanelComponent_Factory(t) {
  return new (t || _NzCollapsePanelComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzCollapseComponent, 1), ɵɵdirectiveInject(NzNoAnimationDirective, 8));
};
_NzCollapsePanelComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCollapsePanelComponent,
  selectors: [["nz-collapse-panel"]],
  viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collapseHeader = _t.first);
    }
  },
  hostAttrs: [1, "ant-collapse-item"],
  hostVars: 6,
  hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzDisabled: "nzDisabled",
    nzShowArrow: "nzShowArrow",
    nzExtra: "nzExtra",
    nzHeader: "nzHeader",
    nzExpandedIcon: "nzExpandedIcon"
  },
  outputs: {
    nzActiveChange: "nzActiveChange"
  },
  exportAs: ["nzCollapsePanel"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 8,
  vars: 8,
  consts: [["collapseHeader", ""], ["role", "button", 1, "ant-collapse-header"], [4, "nzStringTemplateOutlet"], [1, "ant-collapse-extra"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"]],
  template: function NzCollapsePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵtemplate(2, NzCollapsePanelComponent_Conditional_2_Template, 2, 1, "div")(3, NzCollapsePanelComponent_ng_container_3_Template, 2, 1, "ng-container", 2)(4, NzCollapsePanelComponent_Conditional_4_Template, 2, 1, "div", 3);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 4)(6, "div", 5);
      ɵɵprojection(7);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.nzActive);
      ɵɵadvance(2);
      ɵɵconditional(2, ctx.nzShowArrow ? 2 : -1);
      ɵɵadvance();
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzHeader);
      ɵɵadvance();
      ɵɵconditional(4, ctx.nzExtra ? 4 : -1);
      ɵɵadvance();
      ɵɵclassProp("ant-collapse-content-active", ctx.nzActive);
      ɵɵproperty("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  data: {
    animation: [collapseMotion]
  },
  changeDetection: 0
});
var NzCollapsePanelComponent = _NzCollapsePanelComponent;
__decorate([InputBoolean()], NzCollapsePanelComponent.prototype, "nzActive", void 0);
__decorate([InputBoolean()], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
__decorate([WithConfig(), InputBoolean()], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapsePanelComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse-panel",
      exportAs: "nzCollapsePanel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [collapseMotion],
      template: `
    <div #collapseHeader role="button" [attr.aria-expanded]="nzActive" class="ant-collapse-header">
      @if (nzShowArrow) {
        <div>
          <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
            <span
              nz-icon
              [nzType]="expandedIcon || 'right'"
              class="ant-collapse-arrow"
              [nzRotate]="nzActive ? 90 : 0"
            ></span>
          </ng-container>
        </div>
      }
      <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      @if (nzExtra) {
        <div class="ant-collapse-extra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      }
    </div>
    <div
      class="ant-collapse-content"
      [class.ant-collapse-content-active]="nzActive"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [@collapseMotion]="nzActive ? 'expanded' : 'hidden'"
    >
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
      host: {
        class: "ant-collapse-item",
        "[class.ant-collapse-no-arrow]": "!nzShowArrow",
        "[class.ant-collapse-item-active]": "nzActive",
        "[class.ant-collapse-item-disabled]": "nzDisabled"
      },
      providers: [NzDestroyService],
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: NzCollapseComponent,
    decorators: [{
      type: Host
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    nzActive: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzShowArrow: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzActiveChange: [{
      type: Output
    }],
    collapseHeader: [{
      type: ViewChild,
      args: ["collapseHeader", {
        static: true
      }]
    }]
  });
})();
var _NzCollapseModule = class _NzCollapseModule {
};
_NzCollapseModule.ɵfac = function NzCollapseModule_Factory(t) {
  return new (t || _NzCollapseModule)();
};
_NzCollapseModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCollapseModule,
  imports: [NzCollapsePanelComponent, NzCollapseComponent],
  exports: [NzCollapsePanelComponent, NzCollapseComponent]
});
_NzCollapseModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCollapsePanelComponent]
});
var NzCollapseModule = _NzCollapseModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    }]
  }], null, null);
})();
export {
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent
};
//# sourceMappingURL=ng-zorro-antd_collapse.js.map
