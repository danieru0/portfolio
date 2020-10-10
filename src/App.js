import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import styled from 'styled-components';
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './scrollbar.scss';

SwiperCore.use([Scrollbar, Mousewheel]);

const StyledSwiper = styled(Swiper)`
	width: 500px;
	height: 700px;
	border: 1px solid black;
`

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<div className="App">
					<StyledSwiper
						spaceBetween={50}
						slidesPerView={2}
						direction="vertical"
						mousewheel={true}
						scrollbar={{draggable: true}}
					>
						<SwiperSlide>1</SwiperSlide>
						<SwiperSlide>2</SwiperSlide>
						<SwiperSlide>3</SwiperSlide>
						<SwiperSlide>4</SwiperSlide>          
						<SwiperSlide>5</SwiperSlide>          
						<SwiperSlide>6</SwiperSlide>          
						<SwiperSlide>7</SwiperSlide>          
						<SwiperSlide>8</SwiperSlide>          
					</StyledSwiper>
				</div>					
			</ThemeProvider>

		</>
	);
}

export default App;
