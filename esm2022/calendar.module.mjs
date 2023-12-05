import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MonthViewComponent } from './monthview';
import { WeekViewComponent } from './weekview';
import { DayViewComponent } from './dayview';
import { CalendarComponent } from './calendar';
import { initPositionScrollComponent } from './init-position-scroll';
import * as i0 from "@angular/core";
export class NgCalendarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: NgCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.3", ngImport: i0, type: NgCalendarModule, declarations: [MonthViewComponent, WeekViewComponent, DayViewComponent, CalendarComponent, initPositionScrollComponent], imports: [IonicModule, CommonModule], exports: [CalendarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: NgCalendarModule, imports: [IonicModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: NgCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MonthViewComponent, WeekViewComponent, DayViewComponent, CalendarComponent, initPositionScrollComponent
                    ],
                    imports: [IonicModule, CommonModule],
                    exports: [CalendarComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQVNyRSxNQUFNLE9BQU8sZ0JBQWdCOzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFMckIsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsMkJBQTJCLGFBRWpHLFdBQVcsRUFBRSxZQUFZLGFBQ3pCLGlCQUFpQjsrR0FFbEIsZ0JBQWdCLFlBSGYsV0FBVyxFQUFFLFlBQVk7OzJGQUcxQixnQkFBZ0I7a0JBUDVCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLDJCQUEyQjtxQkFDMUc7b0JBQ0QsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGh2aWV3JztcbmltcG9ydCB7IFdlZWtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi93ZWVrdmlldyc7XG5pbXBvcnQgeyBEYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kYXl2aWV3JztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhcic7XG5pbXBvcnQgeyBpbml0UG9zaXRpb25TY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL2luaXQtcG9zaXRpb24tc2Nyb2xsJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTW9udGhWaWV3Q29tcG9uZW50LCBXZWVrVmlld0NvbXBvbmVudCwgRGF5Vmlld0NvbXBvbmVudCwgQ2FsZW5kYXJDb21wb25lbnQsIGluaXRQb3NpdGlvblNjcm9sbENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW0lvbmljTW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtDYWxlbmRhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmdDYWxlbmRhck1vZHVsZSB7fVxuIl19