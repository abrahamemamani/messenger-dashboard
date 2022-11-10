const fontSizes = [12, 14, 16, 18, 20, 24, 36, 48, 80, 96];
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const lineHeights = [1, 1.25, 1.5];
const radii = ['0px', '2px', '4px', '8px', '16px', '48px'];
const space = [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512];

const theme = {
	breakpoints: [32, 48, 64],

	space: {
		zero: space[0],
		small: space[1],
		medium: space[2],
		large: space[3],
		xlarge: space[4],
		xxlarge: space[5],
	},
	fontSizes: {
		sm: fontSizes[0],
		base: fontSizes[1],
		md: fontSizes[2],
		large: fontSizes[3],
		xlarge: fontSizes[4],
	},
	fontWeights,
	lineHeights,

	colors: {
		black: '#000',
		white: '#fff',
		transparent: 'transparent',
		main: '#17191A',
		red: {
			default: '#F23817',
			dark: '#6E1C18',
		},
		green: '#3EC40C',
		gray: {
			default: '#838586',
			dark: '#272A30',
			details: '#1E2021', // lines
			lighter: '#87898A',
			darker: '#191F26', // background reactions
		},
		blue: '#439EF9',
	},

	radii
};

export default theme;