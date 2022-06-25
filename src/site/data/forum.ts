export type DocsMap = {
	name: string;
	path?: string;
	type?: "page" | "category";
	icon?: string;
	pages?: DocsMap[];
};

// SVG stuff is hopefully temporary
export const docsMap: DocsMap[] = [
	{
		name: "Forum Home",
		path: "",
		icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 7c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5z"/><path d="M8 6.25a.75.75 0 100-1.5.75.75 0 000 1.5z"/><path d="M2 8a6 6 0 1112 0A6 6 0 012 8zm6-5a5 5 0 100 10A5 5 0 008 3z"/></svg>`
	},
	{
		name: "Getting Started",
		path: "/getting-started",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 1.5C13 1.22386 12.7761 1 12.5 1C12.2239 1 12 1.22386 12 1.5V3H10.5C10.2239 3 10 3.22386 10 3.5C10 3.77614 10.2239 4 10.5 4H12V5.5C12 5.77614 12.2239 6 12.5 6C12.7761 6 13 5.77614 13 5.5V4H14.5C14.7761 4 15 3.77614 15 3.5C15 3.22386 14.7761 3 14.5 3H13V1.5ZM3.75 2C2.7835 2 2 2.7835 2 3.75V12.25C2 13.2165 2.7835 14 3.75 14H12.25C13.2165 14 14 13.2165 14 12.25V9.25C14 8.2835 13.2165 7.5 12.25 7.5H8.5V3.75C8.5 2.7835 7.7165 2 6.75 2H3.75ZM7.5 8.5V13H3.75C3.33579 13 3 12.6642 3 12.25V8.5H7.5ZM7.5 3.75V7.5H3V3.75C3 3.33579 3.33579 3 3.75 3H6.75C7.16421 3 7.5 3.33579 7.5 3.75ZM12.25 13H8.5V8.5H12.25C12.6642 8.5 13 8.83579 13 9.25V12.25C13 12.6642 12.6642 13 12.25 13Z"/></svg>`
	},
	{
		type: "category",
		name: "Components",
		pages: [
			{
				name: "Button",
				path: "/components/button",
				// Cursor Hover 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v5a2 2 0 01-1.16 1.82 1.5 1.5 0 00-.28-.38l-.45-.45A1 1 0 0014 10V5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1h4v1H3a2 2 0 01-2-2V5z"/><path d="M8.85 8.15A.5.5 0 008 8.5v6a.5.5 0 00.9.3l1.35-1.8h2.25a.5.5 0 00.35-.85l-4-4zM9 13V9.7l2.3 2.3H10a.5.5 0 00-.4.2L9 13z"/></svg>`
			},
			{
				name: "Checkbox",
				path: "/components/checkbox",
				// Checkbox Checked 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8536 6.85355C11.0488 6.65829 11.0488 6.34171 10.8536 6.14645C10.6583 5.95118 10.3417 5.95118 10.1464 6.14645L7 9.29289L5.85355 8.14645C5.65829 7.95118 5.34171 7.95118 5.14645 8.14645C4.95118 8.34171 4.95118 8.65829 5.14645 8.85355L6.64645 10.3536C6.84171 10.5488 7.15829 10.5488 7.35355 10.3536L10.8536 6.85355ZM3 4.5C3 3.67157 3.67157 3 4.5 3H11.5C12.3284 3 13 3.67157 13 4.5V11.5C13 12.3284 12.3284 13 11.5 13H4.5C3.67157 13 3 12.3284 3 11.5V4.5ZM11.5 4H4.5C4.22386 4 4 4.22386 4 4.5V11.5C4 11.7761 4.22386 12 4.5 12H11.5C11.7761 12 12 11.7761 12 11.5V4.5C12 4.22386 11.7761 4 11.5 4Z" /></svg>`
			},
			{
				name: "ToggleSwitch",
				path: "/components/toggleswitch",
				// Toggle Left 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10C3.89543 10 3 9.10457 3 8C3 6.89543 3.89543 6 5 6C6.10457 6 7 6.89543 7 8C7 9.10457 6.10457 10 5 10Z"/><path d="M15 8C15 5.79086 13.2091 4 11 4H5C2.79086 4 1 5.79086 1 8C1 10.2091 2.79086 12 5 12H11C13.2091 12 15 10.2091 15 8ZM11 5C12.6569 5 14 6.34315 14 8C14 9.65685 12.6569 11 11 11H5C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5H11Z"/></svg>`
			},
			{
				name: "RadioButton",
				path: "/components/radiobutton",
				// Radio Button 16 Filled
				icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"/><path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z"/></svg>`
			},
			{
				name: "TextBox",
				path: "/components/textbox",
				// Rename 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 2C6.22386 2 6 2.22386 6 2.5C6 2.77614 6.22386 3 6.5 3H7.5V13H6.5C6.22386 13 6 13.2239 6 13.5C6 13.7761 6.22386 14 6.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H8.5V3H9.5C9.77614 3 10 2.77614 10 2.5C10 2.22386 9.77614 2 9.5 2H6.5ZM4 4H6.5V5H4C3.44771 5 3 5.44771 3 6V9.99726C3 10.5495 3.44772 10.9973 4 10.9973H6.5V11.9973H4C2.89543 11.9973 2 11.1018 2 9.99726V6C2 4.89543 2.89543 4 4 4ZM12 10.9973H9.5V11.9973H12C13.1046 11.9973 14 11.1018 14 9.99727V6C14 4.89543 13.1046 4 12 4H9.5V5H12C12.5523 5 13 5.44772 13 6V9.99727C13 10.5496 12.5523 10.9973 12 10.9973Z"/></svg>`
			},
			{
				name: "Slider",
				path: "/components/slider",
				// Options 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9C6.93191 9 7.71496 9.63738 7.93699 10.5L13.5 10.5C13.7761 10.5 14 10.7239 14 11C14 11.2455 13.8231 11.4496 13.5899 11.4919L13.5 11.5L7.93673 11.501C7.71435 12.3631 6.93155 13 6 13C5.06845 13 4.28565 12.3631 4.06327 11.501L2.5 11.5C2.22386 11.5 2 11.2761 2 11C2 10.7545 2.17688 10.5504 2.41012 10.5081L2.5 10.5L4.06301 10.5C4.28504 9.63738 5.06809 9 6 9ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10ZM10 3C10.9319 3 11.715 3.63738 11.937 4.49998L13.5 4.5C13.7761 4.5 14 4.72386 14 5C14 5.24546 13.8231 5.44961 13.5899 5.49194L13.5 5.5L11.9367 5.50102C11.7144 6.36312 10.9316 7 10 7C9.06845 7 8.28565 6.36312 8.06327 5.50102L2.5 5.5C2.22386 5.5 2 5.27614 2 5C2 4.75454 2.17688 4.55039 2.41012 4.50806L2.5 4.5L8.06301 4.49998C8.28504 3.63738 9.06809 3 10 3ZM10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4Z"/></svg>`
			},
			{
				name: "Expander",
				path: "/components/expander",
				// Top Panel Expand 16
				icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 11.1741L11.3737 10.1756C11.5556 9.96781 11.8714 9.94675 12.0793 10.1286C12.2871 10.3104 12.3081 10.6263 12.1263 10.8341L10.3763 12.8341C10.2814 12.9426 10.1442 13.0049 10 13.0049C9.85583 13.0049 9.71866 12.9426 9.62372 12.8341L7.87372 10.8341C7.69188 10.6263 7.71294 10.3104 7.92075 10.1286C8.12857 9.94675 8.44445 9.96781 8.6263 10.1756L9.50001 11.1742L9.50001 7.49512C9.50001 7.21898 9.72387 6.99512 10 6.99512C10.2762 6.99512 10.5 7.21898 10.5 7.49512L10.5 11.1741ZM4 16C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4ZM3 14C3 14.5523 3.44772 15 4 15H16C16.5523 15 17 14.5523 17 14V9H11.5V8H17V6C17 5.44771 16.5523 5 16 5H4C3.44772 5 3 5.44772 3 6V8H8.50003V9H3V14Z"/></svg>`
			},
			{
				name: "ContentDialog",
				path: "/components/contentdialog",
				// Window Multiple 16
				icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V9.5C2 10.8807 3.11929 12 4.5 12H9.5C10.8807 12 12 10.8807 12 9.5V4.5C12 3.11929 10.8807 2 9.5 2H4.5ZM10.9146 4H3.08535C3.29127 3.4174 3.84689 3 4.5 3H9.5C10.1531 3 10.7087 3.4174 10.9146 4ZM3 5H11V9.5C11 10.3284 10.3284 11 9.5 11H4.5C3.67157 11 3 10.3284 3 9.5V5ZM6.50018 13.9999C5.68227 13.9999 4.9561 13.6072 4.5 12.9999H10.0002C11.657 12.9999 13.0002 11.6568 13.0002 9.99994V4.49976C13.6074 4.95586 14.0002 5.68203 14.0002 6.49994V9.99994C14.0002 12.2091 12.2093 13.9999 10.0002 13.9999H6.50018Z" fill="currentColor"/></svg>`
			},
			{
				name: "Flyout",
				path: "/components/flyout",
				// Shape Subtract 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2C2.89543 2 2 2.89543 2 4V9C2 9.04652 2.00159 9.09268 2.00471 9.13841C2.00623 9.16053 2.0081 9.18256 2.01033 9.20449C2.04695 9.56512 2.17939 9.89743 2.38178 10.1756C2.62877 10.515 2.97994 10.7737 3.38831 10.9047C3.39395 10.9065 3.3996 10.9083 3.40526 10.9101C3.59314 10.9685 3.79289 11 4 11H5V12C5 13.1046 5.89543 14 7 14H12C13.1046 14 14 13.1046 14 12V7C14 5.89543 13.1046 5 12 5H11V4C11 3.78664 10.9666 3.58108 10.9047 3.38828C10.7737 2.97992 10.5149 2.62875 10.1755 2.38176C10.1567 2.36804 10.1376 2.35464 10.1182 2.34157C9.83486 2.15014 9.4998 2.02941 9.13837 2.00471C9.09265 2.00159 9.04651 2 9 2H4ZM5.14309 3L3 5.1431V4C3 3.44772 3.44772 3 4 3H5.14309ZM3 6.55732L6.5573 3H8.14309L3 8.14312V6.55732ZM9.45038 3.10692C9.77643 3.27167 10 3.60973 10 4V4.293L9.293 5H7.55731L9.45038 3.10692ZM5 7.55732V9.29302L4.29303 10H4C3.60974 10 3.27169 9.77644 3.10693 9.4504L5 7.55732ZM6 7C6 6.44772 6.44772 6 7 6H12C12.5523 6 13 6.44772 13 7V12C13 12.5523 12.5523 13 12 13H7C6.44772 13 6 12.5523 6 12V7Z" fill="currentColor" /></svg>`
			},
			{
				name: "InfoBar",
				path: "/components/infobar",
				// Comment Error 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.59971 3H3.5C2.67157 3 2 3.67157 2 4.5V9.5C2 10.3284 2.67157 11 3.5 11H5V13.8981L8.31213 11H12.5C13.2392 11 13.8536 10.4653 13.9773 9.7615C14.366 9.44393 14.7105 9.07424 15 8.66308V9.5C15 10.8807 13.8807 12 12.5 12H8.68787L5.62533 14.6797C4.99168 15.2342 4 14.7842 4 13.9422V12H3.5C2.11929 12 1 10.8807 1 9.5V4.5C1 3.11929 2.11929 2 3.5 2H6.25716C6.00353 2.30711 5.78261 2.64222 5.59971 3ZM10.5 10C12.9853 10 15 7.98528 15 5.5C15 3.01472 12.9853 1 10.5 1C8.01472 1 6 3.01472 6 5.5C6 7.98528 8.01472 10 10.5 10ZM10 3.5C10 3.22386 10.2239 3 10.5 3C10.7761 3 11 3.22386 11 3.5V5.5C11 5.77614 10.7761 6 10.5 6C10.2239 6 10 5.77614 10 5.5V3.5ZM11.125 7.5C11.125 7.84518 10.8452 8.125 10.5 8.125C10.1548 8.125 9.875 7.84518 9.875 7.5C9.875 7.15482 10.1548 6.875 10.5 6.875C10.8452 6.875 11.125 7.15482 11.125 7.5Z"/></svg>`
			},
			{
				name: "InfoBadge",
				path: "/components/infobadge",
				// Error Circle 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM8 10C8.41421 10 8.75 10.3358 8.75 10.75C8.75 11.1642 8.41421 11.5 8 11.5C7.58579 11.5 7.25 11.1642 7.25 10.75C7.25 10.3358 7.58579 10 8 10ZM8 4.5C8.24546 4.5 8.44961 4.67688 8.49194 4.91012L8.5 5V8.5C8.5 8.77614 8.27614 9 8 9C7.75454 9 7.55039 8.82312 7.50806 8.58988L7.5 8.5V5C7.5 4.72386 7.72386 4.5 8 4.5Z"/></svg>`
			},
			{
				name: "ProgressRing",
				path: "/components/progressring",
				// Arrow Clockwise 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8C3 5.23858 5.23858 3 8 3C9.63582 3 11.0882 3.78555 12.0004 5H10C9.72386 5 9.5 5.22386 9.5 5.5C9.5 5.77614 9.72386 6 10 6H13C13.2761 6 13.5 5.77614 13.5 5.5V2.5C13.5 2.22386 13.2761 2 13 2C12.7239 2 12.5 2.22386 12.5 2.5V4.03126C11.4006 2.78563 9.79204 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 7.72386 13.7761 7.5 13.5 7.5C13.2239 7.5 13 7.72386 13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8Z"/></svg>`
			},
			{
				name: "PersonPicture",
				path: "/components/personpicture",
				// Person Circle 12
				icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.21693 6.26447C4.34752 6.1176 4.54252 6 4.775 6H7.225C7.45748 6 7.65248 6.1176 7.78307 6.26447C7.91264 6.41021 8 6.60757 8 6.80999V6.96999C8 7.7872 7.18342 8.5 6 8.5C4.81658 8.5 4 7.7872 4 6.96999V6.80999C4 6.60757 4.08736 6.41021 4.21693 6.26447ZM6 5C6.55228 5 7 4.55228 7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5ZM6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11ZM6 10C3.79086 10 2 8.20914 2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 8.20914 8.20914 10 6 10Z" /></svg>`
			},
			{
				name: "IconButton",
				path: "/components/iconbutton",
				// Square Multiple 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.08496 4C5.29088 3.4174 5.8465 3 6.49961 3H9.99961C11.6565 3 12.9996 4.34315 12.9996 6V9.5C12.9996 10.1531 12.5822 10.7087 11.9996 10.9146V6C11.9996 4.89543 11.1042 4 9.99961 4H5.08496ZM4.5 5H9.5C10.3284 5 11 5.67157 11 6.5V11.5C11 12.3284 10.3284 13 9.5 13H4.5C3.67157 13 3 12.3284 3 11.5V6.5C3 5.67157 3.67157 5 4.5 5ZM4.5 6C4.22386 6 4 6.22386 4 6.5V11.5C4 11.7761 4.22386 12 4.5 12H9.5C9.77614 12 10 11.7761 10 11.5V6.5C10 6.22386 9.77614 6 9.5 6H4.5Z" />
				</svg>`
			},
			{
				name: "TextBlock",
				path: "/components/textblock",
				// Text Font 16
				icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.75044 2C4.95886 2.00001 5.14541 2.1293 5.21859 2.32446L6.94545 6.92998L6.40195 8.32877L6.09079 7.4989H3.40959L2.96829 8.67555C2.87132 8.9341 2.58311 9.06509 2.32455 8.96812C2.066 8.87115 1.93501 8.58294 2.03198 8.32438L4.28226 2.32442C4.35545 2.12927 4.54201 1.99999 4.75044 2ZM3.78464 6.4989H5.71583L4.75036 3.92399L3.78464 6.4989Z" /><path d="M6.70303 10.315C6.70008 10.3221 6.69729 10.3293 6.69466 10.3366L5.65979 13H5.50012C5.22398 13 5.00012 13.2239 5.00012 13.5C5.00012 13.7761 5.22398 14 5.50012 14H5.93136C5.97755 14.0065 6.02375 14.0063 6.06875 14H7.50012C7.77626 14 8.00012 13.7761 8.00012 13.5C8.00012 13.2239 7.77626 13 7.50012 13H6.73263L7.50709 11.0068H11.4909L12.2672 13.0047H11.5028C11.2267 13.0047 11.0028 13.2285 11.0028 13.5047C11.0028 13.7808 11.2267 14.0047 11.5028 14.0047H12.9878C12.9946 14.0048 13.0013 14.0048 13.0081 14.0047H13.5058C13.7819 14.0047 14.0058 13.7808 14.0058 13.5047C14.0058 13.2285 13.7819 13.0047 13.5058 13.0047H13.34L9.96503 4.31861C9.89033 4.12635 9.70524 3.99969 9.49898 3.99969C9.29272 3.99969 9.10762 4.12635 9.03292 4.31861L6.70303 10.315ZM11.1023 10.0068H7.89563L9.49898 5.88026L11.1023 10.0068Z" /></svg>`
			},
			{
				name: "ListItem",
				path: "/components/listitem",
				// Apps list 20
				icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2 3.5C2 2.67157 2.67157 2 3.5 2H4.5C5.32843 2 6 2.67157 6 3.5V4.5C6 5.32843 5.32843 6 4.5 6H3.5C2.67157 6 2 5.32843 2 4.5V3.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V4.5C3 4.77614 3.22386 5 3.5 5H4.5C4.77614 5 5 4.77614 5 4.5V3.5C5 3.22386 4.77614 3 4.5 3H3.5Z"/>
					<path d="M2 9.5C2 8.67157 2.67157 8 3.5 8H4.5C5.32843 8 6 8.67157 6 9.5V10.5C6 11.3284 5.32843 12 4.5 12H3.5C2.67157 12 2 11.3284 2 10.5V9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5V10.5C3 10.7761 3.22386 11 3.5 11H4.5C4.77614 11 5 10.7761 5 10.5V9.5C5 9.22386 4.77614 9 4.5 9H3.5Z"/>
					<path d="M2 15.5C2 14.6716 2.67157 14 3.5 14H4.5C5.32843 14 6 14.6716 6 15.5V16.5C6 17.3284 5.32843 18 4.5 18H3.5C2.67157 18 2 17.3284 2 16.5V15.5ZM3.5 15C3.22386 15 3 15.2239 3 15.5V16.5C3 16.7761 3.22386 17 3.5 17H4.5C4.77614 17 5 16.7761 5 16.5V15.5C5 15.2239 4.77614 15 4.5 15H3.5Z"/>
					<path d="M8 4.5C8 4.22386 8.22386 4 8.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H8.5C8.22386 5 8 4.77614 8 4.5Z"/>
					<path d="M8 10.5C8 10.2239 8.22386 10 8.5 10H17.5C17.7761 10 18 10.2239 18 10.5C18 10.7761 17.7761 11 17.5 11H8.5C8.22386 11 8 10.7761 8 10.5Z"/>
					<path d="M8 16.5C8 16.2239 8.22386 16 8.5 16H17.5C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H8.5C8.22386 17 8 16.7761 8 16.5Z"/>
				</svg>`
			},
			{
				name: "CalendarView",
				path: "/components/calendarview",
				// Calendar LTR 16
				icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.5C3 5.22386 3.22386 5 3.5 5C3.77614 5 4 5.22386 4 5.5C4 5.77614 3.77614 6 3.5 6C3.22386 6 3 5.77614 3 5.5ZM3.5 7C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8C3.77614 8 4 7.77614 4 7.5C4 7.22386 3.77614 7 3.5 7ZM5 5.5C5 5.22386 5.22386 5 5.5 5C5.77614 5 6 5.22386 6 5.5C6 5.77614 5.77614 6 5.5 6C5.22386 6 5 5.77614 5 5.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8C5.77614 8 6 7.77614 6 7.5C6 7.22386 5.77614 7 5.5 7ZM7 5.5C7 5.22386 7.22386 5 7.5 5C7.77614 5 8 5.22386 8 5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5ZM1 3.5C1 2.11929 2.11929 1 3.5 1H8.5C9.88071 1 11 2.11929 11 3.5V8.5C11 9.88071 9.88071 11 8.5 11H3.5C2.11929 11 1 9.88071 1 8.5V3.5ZM3.5 2C2.84689 2 2.29127 2.4174 2.08535 3H9.91465C9.70873 2.4174 9.15311 2 8.5 2H3.5ZM10 4H2V8.5C2 9.32843 2.67157 10 3.5 10H8.5C9.32843 10 10 9.32843 10 8.5V4Z" /></svg>`
			}
		]
	},
	{
		type: "category",
		name: "Internals",
		pages: []
	}
];

// {
// 	name: "ComboBox",
// 	path: "/components/combobox",
// 	icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17H9.22047L9.43163 16.1553C9.44469 16.1031 9.45904 16.0513 9.47466 16H5C4.44772 16 4 15.5523 4 15V5C4 4.44772 4.44772 4 5 4H15C15.5523 4 16 4.44772 16 5V9.23163C16.3194 9.09477 16.6586 9.01856 17 9.00299V5C17 3.89543 16.1046 3 15 3H5ZM9.5 14H10.9427L11.9427 13H9.5C9.22386 13 9 13.2239 9 13.5C9 13.7761 9.22386 14 9.5 14ZM7.5 7.25C7.5 7.66421 7.16421 8 6.75 8C6.33579 8 6 7.66421 6 7.25C6 6.83579 6.33579 6.5 6.75 6.5C7.16421 6.5 7.5 6.83579 7.5 7.25ZM6.75 11C7.16421 11 7.5 10.6642 7.5 10.25C7.5 9.83579 7.16421 9.5 6.75 9.5C6.33579 9.5 6 9.83579 6 10.25C6 10.6642 6.33579 11 6.75 11ZM6.75 14C7.16421 14 7.5 13.6642 7.5 13.25C7.5 12.8358 7.16421 12.5 6.75 12.5C6.33579 12.5 6 12.8358 6 13.25C6 13.6642 6.33579 14 6.75 14ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H9.5ZM9.5 10C9.22386 10 9 10.2239 9 10.5C9 10.7761 9.22386 11 9.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H9.5ZM10.9798 15.3772L15.8092 10.5478C16.5395 9.81741 17.7237 9.81741 18.454 10.5478C19.1843 11.2781 19.1843 12.4622 18.454 13.1926L13.6246 18.022C13.343 18.3036 12.9902 18.5033 12.6039 18.5999L11.106 18.9744C10.4546 19.1372 9.86451 18.5472 10.0274 17.8958L10.4018 16.3979C10.4984 16.0116 10.6982 15.6588 10.9798 15.3772Z" /></svg>`
// },
// {
// 	name: "Slider",
// 	path: "/components/slider",
// 	icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9C6.93191 9 7.71496 9.63738 7.93699 10.5L13.5 10.5C13.7761 10.5 14 10.7239 14 11C14 11.2455 13.8231 11.4496 13.5899 11.4919L13.5 11.5L7.93673 11.501C7.71435 12.3631 6.93155 13 6 13C5.06845 13 4.28565 12.3631 4.06327 11.501L2.5 11.5C2.22386 11.5 2 11.2761 2 11C2 10.7545 2.17688 10.5504 2.41012 10.5081L2.5 10.5L4.06301 10.5C4.28504 9.63738 5.06809 9 6 9ZM6 10C5.44772 10 5 10.4477 5 11C5 11.5523 5.44772 12 6 12C6.55228 12 7 11.5523 7 11C7 10.4477 6.55228 10 6 10ZM10 3C10.9319 3 11.715 3.63738 11.937 4.49998L13.5 4.5C13.7761 4.5 14 4.72386 14 5C14 5.24546 13.8231 5.44961 13.5899 5.49194L13.5 5.5L11.9367 5.50102C11.7144 6.36312 10.9316 7 10 7C9.06845 7 8.28565 6.36312 8.06327 5.50102L2.5 5.5C2.22386 5.5 2 5.27614 2 5C2 4.75454 2.17688 4.55039 2.41012 4.50806L2.5 4.5L8.06301 4.49998C8.28504 3.63738 9.06809 3 10 3ZM10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4Z"/></svg>`
// },

export const docsPages = filterPages(docsMap);

function filterPages(docsStructure: DocsMap[] | DocsMap): DocsMap[] {
	if (Array.isArray(docsStructure)) {
		// it's an array of pages/categories
		return docsStructure
			.map(page => filterPages(page)) // recursively flatten the structure and filter to only include pages
			.flat(Infinity) as DocsMap[]; // flatten the structure to get rid of any nesting
	} else {
		// it's a single page/category, not a structure
		if (docsStructure.type === "category") {
			// it's a category
			return docsStructure.pages
				.map(page => filterPages(page)) // filter down and down until only pages are left
				.flat(Infinity) as DocsMap[]; // flatten the array
		} else {
			// it's a page
			return [docsStructure];
		}
	}
}
