import styled from "styled-components";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { checkoutSuccess } from "../../utils/API";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  background-color: rgb(245, 245, 245);
`;

const Card = styled.div`
  align-items: center;
  display: flex;
  padding: 24px;
  border-radius: 2px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Illustration = styled.div`
  max-width: 100%;
  height: auto;
  @media (max-width: 767px) {
    display: none;
  }
`;

const PaymentSuccess = () => {
	const uid = localStorage.getItem("uid");
	const token = localStorage.getItem("token");
	const planId = "price_1MqA0CJm2vMPXBBfE8jqo1ZX";
	try {
		checkoutSuccess({ uid, token, planId });
	} catch (err) {
		console.log("didn't post");
		console.log(err);
	}

	return (
		<Container>
			<Card>
				<Result
					status="success"
					title="Payment successful"
					extra={[<>
						<Button type="primary" key="home" style={{ backgroundColor: "#2F71DA" }}>
							<Link to="/user/dashboard">Back to dashboard</Link>
						</Button>
					</>
						// <Button key="order" onClick={() => history.push("/orders")}>
						//   View Order
						// </Button>
					]}
				/>
				<Illustration>
					<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="60svw" height="70svh" viewBox="0 0 758.6969 683.65741" ><path d="M948.76455,379.1713c0,118.6-76.18,219.4-182.28,256.14a272.75793,272.75793,0,0,1-132.97,11.26q-6.345-1.035-12.6-2.38-8.47494-1.79993-16.75-4.14c-113.91-32.06-197.4-136.72-197.4-260.88,0-149.67,121.33-271,271-271S948.76455,229.50124,948.76455,379.1713Z" transform="translate(-220.65155 -108.1713)" fill="#e6e6e6"/><path d="M508.0278,462.81409a2.0429,2.0429,0,0,0-.83917,2.76159L609.07742,656.41513a2.04291,2.04291,0,0,0,2.7616.83917L755.8688,580.35709a2.04291,2.04291,0,0,0,.83917-2.7616L654.81912,386.756a2.04292,2.04292,0,0,0-2.7616-.83917Z" transform="translate(-220.65155 -108.1713)" fill="#3f3d56"/><path d="M521.4158,468.39066l93.23865,174.63452L742.4808,574.78055,649.24215,400.144Zm-8.09979,4.324.01794-.009-.02.01Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M553.64547,487.59c-1.98584,1.06024-2.40863,4.15533-.944,6.89846s4.27154,4.11387,6.25744,3.05359l93.61933-49.98318c1.98583-1.06024,2.40863-4.15534.944-6.89847s-4.27161-4.11383-6.25745-3.05359Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M565.18,509.19446c-1.98584,1.06024-2.40863,4.1553-.944,6.89847s4.27155,4.11383,6.25745,3.05358l93.61932-49.98318c1.98584-1.06024,2.40863-4.15533.944-6.89847s-4.2716-4.11386-6.25744-3.05359Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M576.71463,530.79892c-1.98584,1.06024-2.40863,4.15533-.944,6.89844s4.27154,4.11383,6.25744,3.05359l93.61933-49.98319c1.98584-1.06024,2.40863-4.15533.944-6.89847s-4.27161-4.11383-6.25745-3.05359Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M588.24923,552.40335c-1.98584,1.06024-2.40863,4.15534-.944,6.89844s4.27155,4.11383,6.25745,3.05359l93.61926-49.9831c1.98584-1.06024,2.40863-4.15533.944-6.89846s-4.2716-4.11383-6.25744-3.05359Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M599.78378,574.00784c-1.98584,1.06024-2.40863,4.15534-.944,6.89844s4.27155,4.11383,6.25745,3.05359l93.61932-49.98315c1.98584-1.06025,2.40863-4.15534.944-6.89844s-4.2716-4.11383-6.25744-3.05359Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><polygon points="397.312 272.193 482.142 277.373 505.899 206.525 431.494 190.804 397.312 272.193" fill="#2f2e41"/><circle cx="458.4913" cy="220.35056" r="33.92727" fill="#ffb8b8"/><path d="M766.26455,632.6713l.22,2.64a272.75821,272.75821,0,0,1-132.97,11.26l-12.6-2.38,11.99-26.59,7.86-17.43-2.83-60.3-.3-6.24-.37-7.96,5.12-.03,36.4-.22,34.69-.22,5.29-.03C751.93454,565.97128,779.30453,599.13126,766.26455,632.6713Z" transform="translate(-220.65155 -108.1713)" fill="#2f2e41"/><path d="M718.26455,524.6713l-81,9-3-56c-9.50585-24.24439-3.23083-45.88407,16.49769-65.30332l4.01074-15.87582a23.504,23.504,0,0,1,17.36151-17.112h0c13.25891-7.60428,28.278-11.22876,45.13-10.7088h0A33.67559,33.67559,0,0,1,738.589,402.658C735.10348,446.66757,728.84683,487.86447,718.26455,524.6713Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M653.4772,288.437s-17.54272,6.40186-17.99329,29.67661a42.021,42.021,0,0,0,1.55335,11.58923c1.13739,4.27759,2.05005,13.55884-5.59949,25.931a239.88188,239.88188,0,0,0-13.53314,24.91406h0l19.75293,1.906,3.2663-32.74487A162.534,162.534,0,0,1,652.53518,303.542l.12769-.30758s9.06207,15.75033,26.28522,15.26516l-6.3244-5.97784s21.572,8.12366,33.30212,9.7547a7.42868,7.42868,0,0,1,4.47388,12.35312q-.10327.113-.21082.2268c-7.1734,7.58927-21.451,25.22828-12.45819,38.51816s1.71539,17.18848,1.71539,17.18848l13.32453-7.76254,6.04718-3.864.13861,4.9209,31.88189-4.5917s8.57691-1.47281-10.46557-21.86682c0,0-5.10169-7.98426-3.16705-15.049a35.3463,35.3463,0,0,0,.87762-16.56161C733.29953,302.842,715.7883,257.44736,653.4772,288.437Z" transform="translate(-220.65155 -108.1713)" fill="#2f2e41"/><ellipse cx="457.113" cy="674.15746" rx="122" ry="7" fill="#e6e6e6"/><path d="M221.39413,430.704a1.001,1.001,0,0,0-.70884,1.22376l27.29014,102.42678a1.001,1.001,0,0,0,1.22374.70881l77.30324-20.59632a1.001,1.001,0,0,0,.70883-1.22375l-27.2901-102.42676a1.001,1.001,0,0,0-1.22375-.70883Z" transform="translate(-220.65155 -108.1713)" fill="#f2f2f2"/><path d="M240.38952,447.62c-1.06584.284-1.61326,1.71335-1.221,3.18564s1.57831,2.43979,2.64415,2.15583l50.2471-13.38764c1.06583-.284,1.61328-1.71335,1.221-3.18561s-1.57831-2.43979-2.64417-2.15582Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M243.479,459.21545c-1.06584.284-1.61327,1.71335-1.221,3.18561s1.57831,2.43979,2.64415,2.15582l50.2471-13.38763c1.06582-.284,1.61328-1.71335,1.221-3.18564s-1.57831-2.43979-2.64417-2.15582Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M246.56843,470.81094c-1.06584.284-1.61326,1.71335-1.221,3.18564s1.57831,2.43979,2.64415,2.15582l50.24712-13.3876c1.06582-.284,1.61328-1.71335,1.221-3.18564s-1.5783-2.43979-2.64416-2.15582Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M249.65788,482.40643c-1.06584.284-1.61327,1.71335-1.221,3.18564s1.57831,2.43979,2.64415,2.15582l50.24711-13.38763c1.06583-.284,1.61328-1.71335,1.221-3.18564s-1.57831-2.43979-2.64416-2.15582Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M252.74733,494.00192c-1.06584.284-1.61327,1.71335-1.221,3.18561s1.57831,2.43979,2.64415,2.15582l50.24712-13.3876c1.06583-.284,1.61328-1.71335,1.221-3.18564s-1.57831-2.43979-2.64417-2.15582Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M255.83677,505.59738c-1.06584.284-1.61326,1.71335-1.221,3.18564s1.57831,2.43979,2.64417,2.15582l50.2471-13.38763c1.06582-.284,1.61328-1.71335,1.221-3.18561s-1.57831-2.43979-2.64417-2.15582Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M418.94809,791.597c0,.12774.44824.23168,1,.23168h106c.55175,0,1-.104,1-.23168V773.06039c0-.12774-.44825-.23169-1-.23169h-106c-.55176,0-1,.104-1,.23169Z" transform="translate(-220.65155 -108.1713)" fill="#f2f2f2"/><path d="M440.1842,788.35318c0,.25555,1.24024.46344,2.76389.46344s2.76388-.20782,2.76388-.46344V776.30435c0-.25555-1.24023-.46344-2.76388-.46344s-2.76389.20783-2.76389.46344Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M452.1842,788.35318c0,.25555,1.24024.46344,2.76389.46344s2.76388-.20782,2.76388-.46344V776.30435c0-.25555-1.24023-.46344-2.76388-.46344s-2.76389.20783-2.76389.46344Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M464.1842,788.35318c0,.25555,1.24024.46344,2.76389.46344s2.76388-.20782,2.76388-.46344V776.30435c0-.25555-1.24023-.46344-2.76388-.46344s-2.76389.20783-2.76389.46344Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M476.1842,788.35318c0,.25555,1.24024.46344,2.76389.46344s2.76388-.20782,2.76388-.46344V776.30435c0-.25555-1.24023-.46344-2.76388-.46344s-2.76389.20783-2.76389.46344Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M488.1842,788.35318c0,.25555,1.24024.46344,2.76389.46344s2.76388-.20782,2.76388-.46344V776.30435c0-.25555-1.24023-.46344-2.76388-.46344s-2.76389.20783-2.76389.46344Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M500.1842,788.35318c0,.25555,1.24024.46344,2.76389.46344s2.76388-.20782,2.76388-.46344V776.30435c0-.25555-1.24023-.46344-2.76388-.46344s-2.76389.20783-2.76389.46344Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M224.22973,356.78873a1.001,1.001,0,0,0-.41116,1.35312L273.742,451.64932a1.001,1.001,0,0,0,1.35312.41117l70.57169-37.67807a1.001,1.001,0,0,0,.41116-1.35312l-49.92346-93.50748a1.001,1.001,0,0,0-1.35312-.41116Z" transform="translate(-220.65155 -108.1713)" fill="#e6e6e6"/><path d="M230.78959,359.52112l45.68505,85.56738L339.107,411.65,293.422,326.0817Zm-3.96875,2.11865.00879-.00439-.00976.00488Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M246.58148,368.92844c-.973.5195-1.18018,2.036-.46257,3.38009s2.093,2.01569,3.066,1.49619L295.05652,349.314c.973-.5195,1.18017-2.036.46255-3.3801s-2.093-2.01569-3.066-1.49619Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M252.2332,379.51419c-.973.5195-1.18018,2.036-.46257,3.3801s2.093,2.01568,3.066,1.49618l45.8716-24.49075c.973-.5195,1.18017-2.036.46255-3.3801s-2.093-2.01568-3.066-1.49618Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M257.88492,390.1c-.973.5195-1.18018,2.036-.46256,3.38009s2.093,2.01569,3.066,1.49619L306.36,370.4855c.973-.5195,1.18018-2.036.46256-3.38009s-2.093-2.01569-3.066-1.49619Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M263.53662,400.68567c-.973.5195-1.18018,2.036-.46256,3.3801s2.093,2.01568,3.066,1.49618l45.87159-24.49075c.973-.5195,1.18017-2.036.46255-3.3801s-2.093-2.01568-3.066-1.49618Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M269.18832,411.27145c-.973.5195-1.18017,2.036-.46255,3.3801s2.093,2.01569,3.066,1.49619L317.66339,391.657c.973-.5195,1.18014-2.036.46255-3.38009s-2.093-2.01569-3.066-1.49619Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M274.84,421.85718c-.973.5195-1.18017,2.036-.46255,3.38009s2.093,2.01569,3.066,1.49619l45.87161-24.49075c.973-.5195,1.18018-2.036.46256-3.3801s-2.093-2.01569-3.066-1.49619Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M909.98428,595.74619a1.001,1.001,0,0,0-1.36969.35217L854.687,687.35519a1.001,1.001,0,0,0,.35217,1.36969L923.91226,729.425a1.001,1.001,0,0,0,1.36969-.35218L979.20956,637.816a1.001,1.001,0,0,0-.35217-1.36969Z" transform="translate(-220.65155 -108.1713)" fill="#e6e6e6"/><path d="M911.06021,602.77048l-49.348,83.50854,61.12414,36.12171,49.34882-83.5091Zm-3.873-2.289.0083.00524-.00927-.00579Z" transform="translate(-220.65155 -108.1713)" fill="#fff"/><path d="M911.23318,621.15115c-.94958-.56115-2.35278.05024-3.12793,1.362s-.63391,2.83582.31568,3.397l44.76751,26.45507c.94959.56116,2.35279-.05023,3.128-1.362s.63392-2.83581-.31567-3.397Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M905.1282,631.48215c-.94958-.56116-2.35278.05023-3.128,1.362s-.63391,2.83581.31567,3.397L947.0834,662.6962c.94959.56115,2.35279-.05023,3.128-1.362s.63391-2.83582-.31567-3.397Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M899.02316,641.81314c-.94958-.56116-2.35278.05023-3.128,1.362s-.63391,2.83582.31567,3.397l44.76752,26.45508c.94959.56116,2.35278-.05023,3.128-1.362s.63391-2.83581-.31567-3.397Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M892.91818,652.144c-.94965-.56115-2.35278.05023-3.128,1.362s-.63391,2.83582.31567,3.397l44.76752,26.455c.94965.56116,2.35278-.05023,3.128-1.362s.63391-2.83581-.31567-3.397Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M886.81314,662.475c-.94959-.56116-2.35278.05023-3.128,1.362s-.63391,2.83581.31567,3.397l44.76752,26.455c.94958.56115,2.35278-.05024,3.128-1.362s.63391-2.83582-.31567-3.397Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M880.7081,672.80606c-.94959-.56116-2.35279.05023-3.128,1.362s-.63391,2.83582.31567,3.397l44.76752,26.455c.94958.56116,2.35278-.05023,3.128-1.362s.63391-2.83581-.31568-3.397Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/><path d="M661.26438,429.67135l-1.03955,6.44-10.96045,67.56-6.87988,21.97-2.41992,7.73-2.02979,6.5-24.67041,78.8-6.76855,15.90265a18.99473,18.99473,0,1,0,22.21338,7.01306l48.28564-112.32569,1.78955-3.84,5.48-11.75,10.3501-78.09.6499-4.91Z" transform="translate(-220.65155 -108.1713)" fill="#ffb8b8"/><path d="M701.26455,437.6713c-15.71569-5.6474-30.79174-6.24772-45,0l4.63746-40.19516a19.17077,19.17077,0,0,1,18.15216-19.7938h0A19.17079,19.17079,0,0,1,699.20608,395.819l.00336.06595Z" transform="translate(-220.65155 -108.1713)" fill="#2f71da"/></svg>
				</Illustration>
			</Card>
		</Container>
	);
};

export default PaymentSuccess;
