// Enable dark mode
window.addEventListener("load", (event) => {
	console.log("page is fully loaded");
	document.documentElement.classList.add('cc--darkmode');
	CookieConsent.run({
		guiOptions: {
			consentModal: {
				layout: "box",
				position: "bottom left",
				equalWeightButtons: true,
				flipButtons: false
			},
			preferencesModal: {
				layout: "box",
				position: "right",
				equalWeightButtons: true,
				flipButtons: false
			}
		},
		categories: {
			necessary: {
				readOnly: true
			},
			functionality: {},
			analytics: {},
			marketing: {}
		},
		language: {
			default: "en",
			autoDetect: "browser",
			translations: {
				en: {
					consentModal: {
						title: "Cookie Preferences",
						description: "We use cookies to enhance your browsing experience and analyze site traffic. By clicking 'Accept all', you consent to our use of cookies as described in our Privacy Policy.",
						acceptAllBtn: "Accept all",
						showPreferencesBtn: "Manage preferences",
						footer: "<a href=\"https://secnap.com/privacy-policy\">Privacy Policy</a>\n<a href=\"https://secnap.com/terms-of-service\">Terms and conditions</a>"
					},
					preferencesModal: {
						title: "Consent Preferences Center",
						acceptAllBtn: "Accept all",
						acceptNecessaryBtn: "Reject all",
						savePreferencesBtn: "Save preferences",
						closeIconLabel: "Close modal",
						serviceCounterLabel: "Service|Services",
						sections: [
							{
								title: "Cookie Usage",
								description: "We use cookies and similar technologies to ensure our website functions properly and to improve our services. Some cookies are essential for technical reasons, while others help us enhance your experience."
							},
							{
								title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
								description: "These cookies are essential for enabling basic functions like secure login, shopping cart functionality, and maintaining your privacy preferences. The website cannot function properly without these cookies.",
								linkedCategory: "necessary"
							},
							{
								title: "Analytics Cookies",
								description: "These cookies help us understand how visitors interact with our website by collecting anonymous information. We use this data to improve our website performance and security services.",
								linkedCategory: "analytics"
							},
							{
								title: "More information",
								description: "For any questions about our cookie policy and your choices, please <a class=\"cc__link\" href=\"https://secnap.com/contact\">contact us</a>. For detailed information about our use of cookies, please review our <a class=\"cc__link\" href=\"https://secnap.com/privacy-policy\">Privacy Policy</a>."
							}
						]
					}
				}
			}
		}
	});
});

window.onload = function () {
	let mainHeading = document.querySelector('[main-h]');
	mainHeading.style.minHeight = `${mainHeading.offsetHeight}px`;
	let heroSpan1 = document.querySelector('[hero-span-1]');
	let heroSpan2 = document.querySelector('[hero-span-2]');
	let heroSpan1Txt = heroSpan1.textContent;
	let heroSpan2Txt = heroSpan2.textContent;
	let heroTl = gsap.timeline({
		scrollTrigger: {
			trigger: 'section',
			start: 'top bottom',
			end: 'top bottom'
		}
	});
	heroTl.fromTo(heroSpan1, { text: '' }, { text: heroSpan1Txt, duration: 0.5 });
	//heroTl.fromTo(heroSpan1, { display: 'inline-block' }, { display: 'block' });
	heroTl.fromTo(heroSpan2, { display: 'none', text: '' }, { display: 'inline-block', text: heroSpan2Txt, duration: 0.75 }, '-=0.5');

	// Typed Anim
	let typedElements = document.querySelectorAll('[typed-anim]');
	typedElements.forEach((item) => {
		let curTxt = item.textContent;
		let typedTl = gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: 'top 95%',
				end: 'top 95%'
			}
		});
		typedTl.fromTo(item, {
				text: '',
			},
			{
				duration: 1.5,
				text: curTxt,
				ease: "none",
			});
	});
}