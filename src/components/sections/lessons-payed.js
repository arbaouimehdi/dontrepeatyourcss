import React from "react";

// Data
import { payedCourse } from "../data";

const LessonsPayed = () => {
	return (
		<div className="course">
			{payedCourse.map((courseModule, index) => {
				return (
					<div className="course__module" key={index}>
						<h3>{courseModule.title}</h3>
						<div className="lesson__items">
							{courseModule.lessons.map(lesson => (
								<div className="lesson__item">
									{lesson.imgName}
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default LessonsPayed;
