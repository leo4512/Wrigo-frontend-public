// import {
// 	SignUpTag,
// 	LoginTag,
// 	Logo,
// 	Nav,
// 	NavContainer,
// 	NavItems,
// 	Title
// } from "./style";
import Spline from "@splinetool/react-spline";
import {
	AppContainer,
	Header,
	Main,
	Section,
	H1,
	H2,
	SubTitle,
	Footer,
	Navbar,
	NavMenu,
	NavMenuItem,
	NavLink,
	TeamSection,
	TeamTitle,
	TeamList,
	TeamMember,
	SignUpTag,
	LoginTag
} from "./style.js";

import FeatureSection from "./components/FeatureSection.jsx";
import PriceWrap from "./components/PriceSection.jsx";

const LandingPage = () => {
	return (
		<AppContainer>

			{/* <div style={{ width: "100 %", height: "100%" }}>
				<Header>
					<H1>Welcome to Wrigo: Your Ultimate IELTS Writing Partner</H1>
				</Header>
				<Spline scene="https://prod.spline.design/2402yDMIzA267Ci0/scene.splinecode" />
			</div> */}
			<div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
				<Spline
					scene="https://prod.spline.design/X77p9eQPZldGbZLZ/scene.splinecode"
					spline-resize="maxWidth: 1024, maxHeight: 768"
					style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
				/>
				<Navbar>
					<NavMenu>
						<NavMenuItem>
							<NavLink href="#home">Home</NavLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavLink href="#features">Features</NavLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavLink href="#pricing">Pricing</NavLink>
						</NavMenuItem>
						<NavMenuItem>
							<NavLink href="#about">About</NavLink>
						</NavMenuItem>
					</NavMenu>
					<NavMenu>
						<NavMenuItem>
							<SignUpTag to="/signup">Sign up</SignUpTag>
						</NavMenuItem>
						<NavMenuItem>
							<LoginTag to="/login">Log in</LoginTag>
						</NavMenuItem>
					</NavMenu>
				</Navbar>
				<div style={{ position: "relative", zIndex: 1 }}>
					<Header>
						<H1>Wrigo</H1>
						<SubTitle>Unlock the full potential <br />
  with your IELTS Writing Partner
						</SubTitle>
					</Header>
				</div>
			</div>

			<Main>

				<FeatureSection />
				<PriceWrap/>

				<Section>
				</Section>
				<Section id="about">
					<H2>About</H2>
					<TeamSection>
						<TeamTitle>Tech Consultants</TeamTitle>
						<TeamList>
							<TeamMember>Tech Consultant 1</TeamMember>
							<TeamMember>Tech Consultant 2</TeamMember>
						</TeamList>
					</TeamSection>
					<TeamSection>
						<TeamTitle>Development Team</TeamTitle>
						<TeamList>
							{Array.from({ length: 10 }, (_, i) => (
								<TeamMember key={i}>Full-stack Engineer {i + 1}</TeamMember>
							))}
						</TeamList>
					</TeamSection>
					<TeamSection>
						<TeamTitle>DevOps Team</TeamTitle>
						<TeamList>
							{Array.from({ length: 6 }, (_, i) => (
								<TeamMember key={i}>DevOps Engineer {i + 1}</TeamMember>
							))}
						</TeamList>
					</TeamSection>
				</Section>
			</Main>
			<Footer>
				<p>&copy; {new Date().getFullYear()} Wrigo. All rights reserved.</p>
			</Footer>
		</AppContainer>
	);
};

export default LandingPage;
