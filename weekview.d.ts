import { OnInit, OnChanges, EventEmitter, SimpleChanges, TemplateRef, ElementRef, OnDestroy, AfterViewInit, NgZone } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import type { ICalendarComponent, IDisplayEvent, IEvent, ITimeSelected, IRange, IWeekView, IWeekViewRow, IWeekViewDateRow, CalendarMode, IDateFormatter, IDisplayWeekViewHeader, IDisplayAllDayEvent, IWeekViewAllDayEventSectionTemplateContext, IWeekViewNormalEventSectionTemplateContext } from './calendar.interface';
import { CalendarService } from './calendar.service';
import * as i0 from "@angular/core";
export declare class WeekViewComponent implements ICalendarComponent, OnInit, OnChanges, OnDestroy, AfterViewInit {
    private calendarService;
    private elm;
    private zone;
    constructor(calendarService: CalendarService, elm: ElementRef, zone: NgZone);
    private slider;
    class: boolean;
    weekviewHeaderTemplate: TemplateRef<IDisplayWeekViewHeader>;
    weekviewAllDayEventTemplate: TemplateRef<IDisplayAllDayEvent>;
    weekviewNormalEventTemplate: TemplateRef<IDisplayEvent>;
    weekviewAllDayEventSectionTemplate: TemplateRef<IWeekViewAllDayEventSectionTemplateContext>;
    weekviewNormalEventSectionTemplate: TemplateRef<IWeekViewNormalEventSectionTemplateContext>;
    weekviewInactiveAllDayEventSectionTemplate: TemplateRef<IWeekViewAllDayEventSectionTemplateContext>;
    weekviewInactiveNormalEventSectionTemplate: TemplateRef<IWeekViewNormalEventSectionTemplateContext>;
    formatWeekTitle?: string;
    formatWeekViewDayHeader?: string;
    formatHourColumn?: string;
    startingDayWeek: number;
    allDayLabel?: string;
    hourParts: number;
    eventSource: IEvent[];
    autoSelect: boolean;
    markDisabled?: (date: Date) => boolean;
    locale: string;
    dateFormatter?: IDateFormatter;
    dir: string;
    scrollToHour: number;
    preserveScrollPosition?: boolean;
    lockSwipeToPrev?: boolean;
    lockSwipeToNext?: boolean;
    lockSwipes?: boolean;
    startHour: number;
    endHour: number;
    sliderOptions?: SwiperOptions;
    hourSegments: number;
    onRangeChanged: EventEmitter<IRange>;
    onEventSelected: EventEmitter<IEvent>;
    onTimeSelected: EventEmitter<ITimeSelected>;
    onDayHeaderSelected: EventEmitter<ITimeSelected>;
    onTitleChanged: EventEmitter<string>;
    views: IWeekView[];
    currentViewIndex: number;
    range: IRange;
    direction: number;
    mode: CalendarMode;
    private inited;
    private currentDateChangedFromParentSubscription?;
    private eventSourceChangedSubscription?;
    private slideChangedSubscription?;
    private slideUpdatedSubscription?;
    hourColumnLabels: string[];
    initScrollPosition: number;
    private formatDayHeader;
    private formatTitle;
    private formatHourColumnLabel;
    private hourRange;
    static createDateObjects(startTime: Date, startHour: number, endHour: number, timeInterval: number): IWeekViewRow[][];
    static getDates(startTime: Date, n: number): IWeekViewDateRow[];
    private static compareEventByStartOffset;
    private static calculateWidth;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onSlideChanged(direction: number): void;
    move(direction: number): void;
    private getHourColumnLabels;
    getViewData(startTime: Date): IWeekView;
    getRange(currentDate: Date): IRange;
    onDataLoaded(): void;
    refreshView(): void;
    getTitle(): string;
    getHighlightClass(date: IWeekViewDateRow): string;
    select(selectedTime: Date, events: IDisplayEvent[]): void;
    placeEvents(orderedEvents: IDisplayEvent[]): void;
    placeAllDayEvents(orderedEvents: IDisplayEvent[]): void;
    overlap(event1: IDisplayEvent, event2: IDisplayEvent): boolean;
    calculatePosition(events: IDisplayEvent[]): void;
    updateCurrentView(currentViewStartDate: Date, view: IWeekView): void;
    daySelected(viewDate: IWeekViewDateRow): void;
    setScrollPosition(scrollPosition: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WeekViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WeekViewComponent, "weekview", never, { "weekviewHeaderTemplate": { "alias": "weekviewHeaderTemplate"; "required": false; }; "weekviewAllDayEventTemplate": { "alias": "weekviewAllDayEventTemplate"; "required": false; }; "weekviewNormalEventTemplate": { "alias": "weekviewNormalEventTemplate"; "required": false; }; "weekviewAllDayEventSectionTemplate": { "alias": "weekviewAllDayEventSectionTemplate"; "required": false; }; "weekviewNormalEventSectionTemplate": { "alias": "weekviewNormalEventSectionTemplate"; "required": false; }; "weekviewInactiveAllDayEventSectionTemplate": { "alias": "weekviewInactiveAllDayEventSectionTemplate"; "required": false; }; "weekviewInactiveNormalEventSectionTemplate": { "alias": "weekviewInactiveNormalEventSectionTemplate"; "required": false; }; "formatWeekTitle": { "alias": "formatWeekTitle"; "required": false; }; "formatWeekViewDayHeader": { "alias": "formatWeekViewDayHeader"; "required": false; }; "formatHourColumn": { "alias": "formatHourColumn"; "required": false; }; "startingDayWeek": { "alias": "startingDayWeek"; "required": false; }; "allDayLabel": { "alias": "allDayLabel"; "required": false; }; "hourParts": { "alias": "hourParts"; "required": false; }; "eventSource": { "alias": "eventSource"; "required": false; }; "autoSelect": { "alias": "autoSelect"; "required": false; }; "markDisabled": { "alias": "markDisabled"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "dateFormatter": { "alias": "dateFormatter"; "required": false; }; "dir": { "alias": "dir"; "required": false; }; "scrollToHour": { "alias": "scrollToHour"; "required": false; }; "preserveScrollPosition": { "alias": "preserveScrollPosition"; "required": false; }; "lockSwipeToPrev": { "alias": "lockSwipeToPrev"; "required": false; }; "lockSwipeToNext": { "alias": "lockSwipeToNext"; "required": false; }; "lockSwipes": { "alias": "lockSwipes"; "required": false; }; "startHour": { "alias": "startHour"; "required": false; }; "endHour": { "alias": "endHour"; "required": false; }; "sliderOptions": { "alias": "sliderOptions"; "required": false; }; "hourSegments": { "alias": "hourSegments"; "required": false; }; }, { "onRangeChanged": "onRangeChanged"; "onEventSelected": "onEventSelected"; "onTimeSelected": "onTimeSelected"; "onDayHeaderSelected": "onDayHeaderSelected"; "onTitleChanged": "onTitleChanged"; }, never, never, false, never>;
}
