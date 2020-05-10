export default class TodoListItemDTO {
	id;
	title;
	deadline;
	completed = false;

	constructor(id, title, deadline) {
		this.id = id;
		this.title = title;
		this.deadline = deadline;
	}
}
