import React from "react";
import { Answer } from "./index";

const AnswersList = (props) => {
	return (
		<div className="c-grid-answer">
			{props.answers.map((value, index) => (
				<Answer
					content={value.content}
					nextId={value.nextId}
					select={props.select}
					handleClickOpen={props.handleClickOpen}
					key={index.toString()}
				/>
			))}
		</div>
	);
};
export default AnswersList;
