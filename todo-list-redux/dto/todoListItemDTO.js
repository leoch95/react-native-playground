export default class TodoListItemDTO {
	title;
	deadline;
	completed = false;

	constructor(title, deadline) {
		this.title = title;
		this.deadline = deadline;
	}
}
