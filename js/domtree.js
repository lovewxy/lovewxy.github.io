const width = 600;
const height = 550;
const quantity = 170;
const types = [ 'text', 'select', 'progress', 'meter', 'button', 'radio', 'checkbox' ];
const greetings = ['吴心语小宝贝muaaaaaa~','祝吴心语节日快乐~','吴心语我爱你！！！！','吴心语小宝宝要开心呀~','吴心语一定可以拿下5.0~','吴心语感冒快点好起来！！！','吴心语圣诞节快乐~','吴心语收到草莓代码熊的礼物~','吴心语快乐开心~','吴心语心想事成~','吴心语学习顺利！！' ];

let tree = document.querySelector( '.tree' ),
treeRotation = 0;

tree.style.width = width + 'px';
tree.style.height = height + 'px';

window.addEventListener( 'resize', resize, false );

// 树
for( var i = 0; i < quantity; i++ ) {
	let element = null,
		type = types[ Math.floor( Math.random() * types.length ) ],
		greeting = greetings[ Math.floor( Math.random() * greetings.length ) ];

	let x = width/2,
		y = Math.round( Math.random() * height );

	let rx = 0,
		ry = Math.random() * 360,
		rz = -Math.random() * 15;

	let elemenWidth = 5 + ( ( y / height ) * width / 2 ),
		elemenHeight = 26;

	switch( type ) {
		case 'button':
			element = document.createElement( 'button' );
			element.textContent = greeting;
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'progress':
			element = document.createElement( 'progress' );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			if( Math.random() > 0.5 ) {
				element.setAttribute( 'max', '100' );
				element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			}
			break;
		case 'select':
			element = document.createElement( 'select' );
			element.setAttribute( 'selected', greeting );
			element.innerHTML = '<option>' + greetings.join( '</option><option>' ) + '</option>';
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'meter':
			element = document.createElement( 'meter' );
			element.setAttribute( 'min', '0' );
			element.setAttribute( 'max', '100' );
			element.setAttribute( 'value', Math.round( Math.random() * 100 ) );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
			break;
		case 'text':
		default:
			element = document.createElement( 'input' );
			element.setAttribute( 'type', 'text' );
			element.setAttribute( 'value', greeting );
			element.style.width = elemenWidth + 'px';
			element.style.height = elemenHeight + 'px';
	}

	element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}

// 让它下雪
for( var i = 0; i < 200; i++ ) {
	let element = document.createElement( 'input' );
	element.setAttribute( 'type', 'radio' );

	let spread = window.innerWidth/2;

	let x = Math.round( Math.random() * spread ) - ( spread / 4 ),
		y = Math.round( Math.random() * height ),
		z = Math.round( Math.random() * spread ) - ( spread / 2 );

	let rx = 0,
		ry = Math.random() * 360,
		rz = 0;

	if( Math.random() > 0.5 ) element.setAttribute( 'checked', '' );

	element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`;

	tree.appendChild( element );
}

function resize() {
	tree.style.top = ( ( window.innerHeight - height - 100 ) / 2 ) + 'px';
}

resize();
