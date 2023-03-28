import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Card } from "antd";
import { searchUserTopics, searchAllTopics } from "../../../utils/index";

const { Search } = Input;

const StyledSearch = styled(Search)`
  width: 400px;

  @media (max-width: 991.98px) {
    width: 200px;
  }
`;

const SearchBox = () => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [visible, setVisible] = useState(false); // modal visible state

	const handleSearch = async () => {
		try {
			const userResponse = await searchUserTopics({ uid: "333", input: searchInput });
			const allResponse = await searchAllTopics({ input: searchInput });
			const userResults = userResponse.data.filter((result) => result.uid);
			const allResults = allResponse.data.filter((result) => !result.uid);
			const results = [...userResults, ...allResults];
			setSearchResults(results);
			setVisible(true); // show modal when search results are ready
		} catch (error) {
			console.error(error);
		}
	};

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleModalCancel = () => {
		setVisible(false);
	};

	return (
		<>
			<StyledSearch
				type="text"
				value={searchInput}
				onChange={handleInputChange}
				onSearch={handleSearch}
				placeholder="Please search the topic..."
			/>

			<Modal
				visible={visible}
				onCancel={handleModalCancel}
				width="80%"
				footer={null}
				title="Search Results"
			>
				<div>
					<h3>My Topics</h3>
					{searchResults
						.filter((result) => result.uid) // filter results for "My Topics"
						.map((result) => (
							<Card key={result.id} style={{ margin: "2px" }}>
								<p style={{ margin: "0px 0" }}>{result.task_topic}</p>
							</Card>
						))}
				</div>
				<div>
					<h3>All Topics</h3>
					{searchResults
						.filter((result) => !result.uid) // filter results for "All Topics"
						.map((result) => (
							<Card key={result.id} style={{ margin: "2px" }}>
								<p style={{ margin: "0px 0" }}>{result.topic_content}</p>
							</Card>
						))}
				</div>
			</Modal>
		</>
	);
};

export default SearchBox;
