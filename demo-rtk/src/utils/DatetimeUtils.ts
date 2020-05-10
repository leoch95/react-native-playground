import Moment from "moment";

export const formatDateTime = (date: Date | number | string, format: string) =>
	Moment(date).format(format);

export const formatDateNowISO = () => formatDateISO(Moment.now());

export const formatTimeNowISO = () => formatTimeISO(Moment.now());

export const formatDateTimeNowISO = () => formatDateTimeISO(Moment.now());

export const formatDateISO = (date: Date | number | string) =>
	formatDateTime(date, "YYYY-MM-DD");

export const formatTimeISO = (date: Date | number | string) =>
	formatDateTime(date, "HH:mm:ss");

export const formatDateTimeISO = (date: Date | number | string) =>
	formatDateTime(date, "YYYY-MM-DD HH:mm:ss");

export const formatDateLocalized = (date: Date | number | string) =>
	formatDateTime(date, "ll");

export const formatTimeLocalized = (date: Date | number | string) =>
	formatDateTime(date, "LT");

export const formatDateTimeLocalized = (date: Date | number | string) =>
	formatDateTime(date, "lll");

export const formatDateNowLocalized = () => formatDateLocalized(Moment.now());

export const formatTimeNowLocalized = () => formatTimeLocalized(Moment.now());

export const formatDateTimeNowLocalized = () =>
	formatDateTimeLocalized(Moment.now());

export const toStartOfDay = (date: Date | number | string) =>
	Moment(date).startOf("day");

export const toEndOfDay = (date: Date | number | string) => Moment(date).endOf("day");

export const now = () => new Date(Moment.now());

const d = {
	formatDateTime,
	formatDateNowISO,
	formatTimeNowISO,
	formatDateTimeNowISO,
	formatDateISO,
	formatTimeISO,
	formatDateTimeISO,
	formatDateLocalized,
	formatTimeLocalized,
	formatDateTimeLocalized,
	formatDateNowLocalized,
	formatTimeNowLocalized,
	formatDateTimeNowLocalized,
	toStartOfDay,
	toEndOfDay,
	now,
};

export default d;
