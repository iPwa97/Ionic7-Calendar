import { OnInit, OnChanges, EventEmitter, SimpleChanges, TemplateRef, ElementRef, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ICalendarComponent, IDayView, IDayViewRow, IDisplayEvent, IEvent, ITimeSelected, IRange, CalendarMode, IDateFormatter, IDisplayAllDayEvent, IDayViewAllDayEventSectionTemplateContext, IDayViewNormalEventSectionTemplateContext } from './calendar.interface';
import { CalendarService } from './calendar.service';
import * as i0 from "@angular/core";
export declare class DayViewComponent implements ICalendarComponent, OnInit, OnChanges, OnDestroy, AfterViewInit {
    private calendarService;
    private elm;
    private zone;
    constructor(calendarService: CalendarService, elm: ElementRef, zone: NgZone);
    private slider;
    class: boolean;
    dayviewAllDayEventTemplate: TemplateRef<IDisplayAllDayEvent>;
    dayviewNormalEventTemplate: TemplateRef<IDisplayEvent>;
    dayviewAllDayEventSectionTemplate: TemplateRef<IDayViewAllDayEventSectionTemplateContext>;
    dayviewNormalEventSectionTemplate: TemplateRef<IDayViewNormalEventSectionTemplateContext>;
    dayviewInactiveAllDayEventSectionTemplate: TemplateRef<IDayViewAllDayEventSectionTemplateContext>;
    dayviewInactiveNormalEventSectionTemplate: TemplateRef<IDayViewNormalEventSectionTemplateContext>;
    formatHourColumn?: string;
    formatDayTitle?: string;
    allDayLabel?: string;
    hourParts: number;
    eventSource: IEvent[];
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
    onTitleChanged: EventEmitter<string>;
    views: IDayView[];
    currentViewIndex: number;
    direction: number;
    mode: CalendarMode;
    range: IRange;
    private inited;
    private callbackOnInit;
    private currentDateChangedFromParentSubscription?;
    private eventSourceChangedSubscription?;
    private slideChangedSubscription?;
    private slideUpdatedSubscription?;
    hourColumnLabels: string[];
    initScrollPosition: number;
    private formatTitle;
    private formatHourColumnLabel;
    private hourRange;
    static createDateObjects(startTime: Date, startHour: number, endHour: number, timeInterval: number): IDayViewRow[];
    private static compareEventByStartOffset;
    private static calculateWidth;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    onSlideChanged(direction: number): void;
    move(direction: number): void;
    private getHourColumnLabels;
    getViewData(startTime: Date): IDayView;
    getRange(currentDate: Date): IRange;
    onDataLoaded(): void;
    refreshView(): void;
    getTitle(): string;
    select(selectedTime: Date, events: IDisplayEvent[]): void;
    placeEvents(orderedEvents: IDisplayEvent[]): void;
    placeAllDayEvents(orderedEvents: IDisplayEvent[]): void;
    overlap(event1: IDisplayEvent, event2: IDisplayEvent): boolean;
    calculatePosition(events: IDisplayEvent[]): void;
    eventSelected(event: IEvent): void;
    setScrollPosition(scrollPosition: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DayViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DayViewComponent, "dayview", never, { "dayviewAllDayEventTemplate": { "alias": "dayviewAllDayEventTemplate"; "required": false; }; "dayviewNormalEventTemplate": { "alias": "dayviewNormalEventTemplate"; "required": false; }; "dayviewAllDayEventSectionTemplate": { "alias": "dayviewAllDayEventSectionTemplate"; "required": false; }; "dayviewNormalEventSectionTemplate": { "alias": "dayviewNormalEventSectionTemplate"; "required": false; }; "dayviewInactiveAllDayEventSectionTemplate": { "alias": "dayviewInactiveAllDayEventSectionTemplate"; "required": false; }; "dayviewInactiveNormalEventSectionTemplate": { "alias": "dayviewInactiveNormalEventSectionTemplate"; "required": false; }; "formatHourColumn": { "alias": "formatHourColumn"; "required": false; }; "formatDayTitle": { "alias": "formatDayTitle"; "required": false; }; "allDayLabel": { "alias": "allDayLabel"; "required": false; }; "hourParts": { "alias": "hourParts"; "required": false; }; "eventSource": { "alias": "eventSource"; "required": false; }; "markDisabled": { "alias": "markDisabled"; "required": false; }; "locale": { "alias": "locale"; "required": false; }; "dateFormatter": { "alias": "dateFormatter"; "required": false; }; "dir": { "alias": "dir"; "required": false; }; "scrollToHour": { "alias": "scrollToHour"; "required": false; }; "preserveScrollPosition": { "alias": "preserveScrollPosition"; "required": false; }; "lockSwipeToPrev": { "alias": "lockSwipeToPrev"; "required": false; }; "lockSwipeToNext": { "alias": "lockSwipeToNext"; "required": false; }; "lockSwipes": { "alias": "lockSwipes"; "required": false; }; "startHour": { "alias": "startHour"; "required": false; }; "endHour": { "alias": "endHour"; "required": false; }; "sliderOptions": { "alias": "sliderOptions"; "required": false; }; "hourSegments": { "alias": "hourSegments"; "required": false; }; }, { "onRangeChanged": "onRangeChanged"; "onEventSelected": "onEventSelected"; "onTimeSelected": "onTimeSelected"; "onTitleChanged": "onTitleChanged"; }, never, never, false, never>;
}
