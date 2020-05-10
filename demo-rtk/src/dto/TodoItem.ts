export default class TodoItem {
	id: number = -1;
	title: string;
	deadlineDateTime: Date;
	location?: string;
	description?: string;
	isCompleted: boolean = false;

	constructor(
		title: string,
		deadlineDateTime: Date,
		location?: string,
		description?: string
	) {
		this.title = title;
		this.deadlineDateTime = deadlineDateTime;
		this.location = location;
		this.description = description;
	}
}
