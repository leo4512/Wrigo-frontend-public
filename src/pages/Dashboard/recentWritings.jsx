import { withTheme } from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewHistory } from "../../utils/index";
import WritingContentCard from "../WritingMain/WritingContentCard";
import UtilityCard from "../../components/UtilityCard/index";
import { Title, UtilityCardWrap, UtilityCardsWrapper, RecentDiv } from "./style";

const RecentWritings = (props) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const cardWidth = 168;

	useEffect(() => {
		function handleResize () {
			setScreenWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [screenWidth]);
	let cardCount = 0;
	if (screenWidth >= 1000) {
		cardCount = Math.floor((screenWidth - 255) / cardWidth) - 1;
	} else {
		cardCount = Math.floor((screenWidth - 105) / cardWidth) - 1;
	}

	useEffect(() => {
		setLoading(true);
		const fromDate = "1970-01-01";
		const toDate = "2050-01-01";
		const token = localStorage.getItem("token");
		const uid = localStorage.getItem("uid");
		viewHistory({ token, uid, type: "writingHistory", from: fromDate, to: toDate }).then((response) => {
			if (response.status === 200) {
				setData(response.data);
			} else if (response.status === 500) {
				alert("Something is wrong with network, please retry.");
			}
			setLoading(false);
		});
	}, []);

	const renderCards = () => {
		return data.map((card, index) => {
			if (index < cardCount) {
				return (
					<Link key={card.id} to={`/user/writing/${card.writing_id}`}>
						<UtilityCardWrap key={card.id} >
							<UtilityCard >
								<WritingContentCard

									loading={card.loading}
									id={card.id}
									taskTopic={card.task_topic}
									writingContent={card.writingContent}
									submitTime={card.submit_time}
									han
									dleDelete={card.handleDelete}
								/>
							</UtilityCard>
						</UtilityCardWrap>
					</Link>
				);
			} else if (index === cardCount) {
				return (
					<Link key={card.id} to={"/user/writings"}>
						<UtilityCardWrap key={card.id}>
							<UtilityCard>
								<EllipsisOutlined
									style={{ fontSize: "60px", color: props.theme.defaultColor }}
								/>
							</UtilityCard>
						</UtilityCardWrap>
					</Link>
				);
			} else {
				return null;
			}
		});
	};

	return (
		<RecentDiv>
			<Title>Recent Writings</Title>
			<UtilityCardsWrapper>

				{loading
					? (
						<div>Loading...</div> // or a loading indicator component
					)
					: data.length === 0
						? (
							<UtilityCard>
								<EllipsisOutlined
									style={{ fontSize: "60px", color: props.theme.defaultColor }}
								/>
							</UtilityCard>
						)
						: (
							renderCards()
						)}
			</UtilityCardsWrapper>

		</RecentDiv>
	);
};
export default withTheme(RecentWritings);
