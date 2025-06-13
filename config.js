// =================================================================================================
// PAGE CONFIGURATION OBJECT
// This file is the single source of truth for all dynamic content on the case study page.
// The renderer.js script consumes this object to construct the page's HTML.
// Modifying values in this file directly changes the content rendered in the browser.
// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
const config = {
  "globals": {
    "companyName": "iStreet Realty Group",
    "mainCTAButtonText": "Book A Discovery Call",
    "primaryColor": "#e3c379",
    "accentColor": "#d9c6a2",
    "agents": [
      {
        "name": "Rick Roccasalva",
        "imageSrc": "https://images.unsplash.com/photo-1557862921-37829c790f19?fit=crop&w=100&q=80",
        "contactDetails": [
          {
            "type": "email",
            "value": "rick@istreetrealty.ca"
          },
          {
            "type": "phone",
            "value": "\t416-410-2880"
          }
        ]
      },
      {
        "name": "Steven Simonetti",
        "imageSrc": "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=100&q=80",
        "contactDetails": [
          {
            "type": "email",
            "value": "steven@istreelrealty.ca"
          },
          {
            "type": "phone",
            "value": "(416) 400-7653"
          }
        ]
      }
    ]
  },
  "header": {
    "tag": "CASE STUDY",
    "title": "How We Helped a Smart Investor Win Their Target Property Against 9 Other Offers—Creating Instant Cash Flow in Today's Tough Market",
    "subheadline": "Purchased in a <strong>High-Demand Area</strong> With Strong Terms—Now <a href=\"#\">Generating Top-Dollar Rent</a> in a Tight Market"
  },
  "mainBox": {
    "summary": {
      "title": "How We Helped a Smart Investor Win Their Target Property Against 9 Other Offers—Creating Instant Cash Flow in Today's Tough Market",
      "heroImage": {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
        "alt": "Investment Property"
      },
      "subTitle": "Summary",
      "paragraphs": [
        "Meet my investor client—a savvy buyer who understood the power of real estate for building generational wealth. They had a specific vision: find a turn-key 2-unit rental property in Woodbridge's exclusive areas that would deliver immediate cash flow and long-term appreciation for their children's future.",
        "Through strategic negotiation and expert market positioning, we secured the perfect investment property. **WON AGAINST 9 OTHER OFFERS** in a fierce bidding war Secured immediate cash flow with premium tenants at top-dollar rent Gained instant equity position with property valued significantly above purchase price **PURCHASED FOR $1,260,000** on a strategically under-listed $999,000 property **Key Victory Stats:** **9 COMPETING OFFERS DEFEATED** **IMMEDIATE POSITIVE CASH FLOW ACHIEVED** **3-5 YEAR EQUITY GROWTH PROJECTED**"
      ]
    },
    "sidebar": {
      "image": {
        "src": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fit=crop&w=200&q=80",
        "alt": "iStreet Realty Group agents"
      },
      "paragraphs": [
        "At {{companyName}} we are built on integrity, insight, and innovation.<br><br>We combine decades of real estate expertise with cutting-edge technology to deliver unmatched support, transparency, and results for our clients.<br><br>With over 40 years of hands-on real estate experience and extensive corporate backgrounds, our managing partners provide a balanced and strategic approach to Residential, Commercial, and Investment properties.<br><br>We prioritize clear communication and use the latest market insights to guide every client toward success—whether buying, selling, or investing.<br><strong>At iStreet Realty Inc., we're more than real estate experts—we're your trusted partner in building your future.</strong>"
      ]
    }
  },
  "sections": [
    {
      "type": "standard",
      "title": "The Challenge",
      "paragraphs": [
        "Finding a cash-flowing investment property in today's market seemed nearly impossible—most deals barely broke even Every desirable property in Woodbridge attracted massive competition, with some getting 10+ offers They'd already viewed 8 different homes but kept losing out to other investors willing to overpay The uncertainty was crushing—they worried about making a $1.2M+ investment without knowing if quality tenants would materialize"
      ]
    },
    {
      "type": "standard",
      "title": "The Turning Point",
      "paragraphs": [
        "After months of frustration, they realized they needed an agent who actually understood investment properties—not just residential sales. My hands-on experience with investment deals and proven track record of helping investors build wealth convinced them I was the missing piece to their success."
      ]
    },
    {
      "type": "standard",
      "title": "The Strategy",
      "paragraphs": [
        "We crafted bulletproof offers with strategic positioning: larger deposits, shorter closings, and fewer conditions that sellers couldn't refuse I leveraged my deep market knowledge to identify the property's true potential before other investors caught on My professional communication and negotiation expertise impressed even the listing agent—they'd never worked with someone at this level We moved fast when the right opportunity appeared, acting within hours while competitors hesitated I provided complete investment analysis, showing exactly how the property would perform financially"
      ],
      "testimonial": {
        "quote": "\"\"Your expertise and integrity made this whole experience fantastic! You checked all the boxes we were looking for and delivered results we didn't think were possible in this market. We're already looking forward to doing this again soon because you've shown us how to build real wealth through strategic real estate investing.\"\"<br><span>— Satisfied Investor Client</span>"
      }
    },
    {
      "type": "standard",
      "title": "The Solution",
      "paragraphs": [
        "The winning strategy combined strong offer terms with professional execution. By focusing on what the seller truly valued—certainty, speed, and simplicity—we positioned our client as the ideal buyer.",
        "After closing, the property performed exactly as projected, with both units rented at top market rates, confirming the investment's strong potential."
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80",
        "alt": "Investment Property Success"
      }
    },
    {
      "type": "standard",
      "title": "The Results",
      "listItems": [
        "**WON AGAINST 9 OTHER OFFERS** in a fierce bidding war",
        "Secured immediate cash flow with premium tenants at top-dollar rent",
        "Gained instant equity position with property valued significantly above purchase price",
        "**PURCHASED FOR $1,260,000** on a strategically under-listed $999,000 property",
        "**Key Victory Stats:**",
        "**9 COMPETING OFFERS DEFEATED**",
        "**IMMEDIATE POSITIVE CASH FLOW ACHIEVED**",
        "**3-5 YEAR EQUITY GROWTH PROJECTED**"
      ]
    },
    {
      "type": "standard",
      "title": "Key Lessons for Buyers",
      "paragraphs": [
        "In multiple offer situations, terms often matter more than price—the right strategy beats throwing more money at the problem Having an agent with actual investment experience is crucial—most agents don't understand cash flow analysis or rental market dynamics Speed and decisiveness win deals—hesitation costs you properties, especially in competitive markets like Woodbridge"
      ]
    },
    {
      "type": "standard",
      "title": "Conclusion",
      "paragraphs": [
        "<strong>In a competitive market, success doesn't always come down to price.</strong> With the right agent, strategy, and negotiation, even a multiple-offer situation can be an opportunity—not a roadblock."
      ]
    },
    {
      "type": "ctaBanner",
      "ctaBannerContent": {
        "subhead": "Trusted By Hundreds Of Home Buyers & Sellers",
        "headline": "Get Your FREE Investment Property Analysis and discover the 3 specific strategies that helped us win against 9 other offers while securing immediate cash flow—even in today's challenging market.",
        "smallText": "{{mainCTAButtonText}} Now ➡️"
      }
    }
  ],
  "footer": {
    "logo": {
      "src": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fit=crop&w=200&q=80",
      "alt": "{{companyName}} Logo"
    },
    "brokerageLabel": "Brokerage:",
    "brokerageName": "HomeLife Partners",
    "brokerageAddress": "123 Main Street, Suite 456, Toronto, ON M1M 1M1",
    "secondaryLogo": {
      "src": "https://i.imgur.com/9GIzqTo.png",
      "altTemplate": "Logo of {{brokerageName}}"
    },
    "disclaimerText": "All testimonials on this page are from real clients. Their experiences do not guarantee similar results.<br>Individual results may vary based on location, market conditions, motivation, as well as other unforeseen factors. Your results may vary.",
    "privacyPolicy": {
      "text": "Privacy Policy",
      "href": "#"
    }
  }
};

// Export for Node.js environment (if applicable) or set for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else if (typeof window !== 'undefined') {
  window.config = config;
}