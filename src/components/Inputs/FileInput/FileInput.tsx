import { ChangeEvent } from "react";
import "./FileInput.css";
import { useMemeContext } from "../../../context/useMemeContext";

export const FileInput = () => {
	const { setImage } = useMemeContext();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setImage(URL.createObjectURL(e.target.files[0]));
		}
	};

	return (
		<label className="upload-button" tabIndex={0}>
			<input type="file" onChange={handleChange} />
			Upload
		</label>
	);
};
