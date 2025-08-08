import './lessons.css';
import '../../layout/style.css';
import '../../layout/bootstrap.min.css';
import '../../layout/footer-style.css';
import '../../layout/style-title.css';

import promoVideo from '../statik/images/info-video.webm';

const videoElement = document.createElement('video');
videoElement.src = promoVideo;
videoElement.controls = true;
document.body.appendChild(videoElement);

const dataGeneral = {
	headerArr: [
		{
			key: 0,
			className: 'header-class',
			title: 'CLASS'
		},
		{
			key: 1,
			className: 'header-function',
			title: 'FUNCTION'
		},
		{
			key: 2,
			className: 'header-component',
			title: 'COMPONENTS'
		},
		{
			key: 3,
			className: 'header-list-type',
			title: 'TYPES'
		},
		{
			key: 4,
			className: 'header-list-context',
			title: 'CONTEXT'
		}
	]
};

const { headerArr } = dataGeneral;

function showContentHeader(data) {
	const headerBlock = document.getElementById('head-Id');
	data.map((el, idx) => {
		const someDiv = document.createElement('div');
		someDiv.textContent = el.title;
		someDiv.className = `${el.className} hover-block`;
		someDiv.dataset.active = idx;
		headerBlock.appendChild(someDiv);
	});
	return headerBlock;
}

showContentHeader(headerArr);

alert('NIHUJA');
console.log('Lessons page loaded');
