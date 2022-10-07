import mongoose from "mongoose";

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
	videoId: {
		type: String,
		required: true
	},
	twitchVideo: {
		type:Boolean,
		default: false
	},
	title: {
		type: String,
		required: true
	},
	permalink: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	classNo: {
		type: [Number]
	},
	thumbnail: {
		type: String,
		required: true
	},
	slides: {
		type: String
	},
	materials: {
		type: String
	},
	checkin: {
		type: String
	}
});

export default mongoose.model('Lesson', lessonSchema);