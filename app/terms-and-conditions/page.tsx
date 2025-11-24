"use client";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  CssBaseline,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#8D99AE", // Light blue text
    },
  },
});

// Navbar links
const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

export default function PrivacyPolicy() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          minWidth: 380,
          position: "relative", // Needed for starry background
        }}>
        {/* Starry Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none", // Ensure stars don’t interfere with interactions
            overflow: "hidden", // Contain starry overflow
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background: `
                radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px),
                radial-gradient(circle, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
                radial-gradient(circle, rgba(79, 195, 247, 0.4) 1px, transparent 1px)
              `,
              backgroundSize:
                "100px 100px, 150px 150px, 200px 200px, 120px 120px",
              backgroundPosition: "0 0, 50px 50px, 100px 100px, 25px 25px",
              animation: "twinkle 6s infinite, drift 30s linear infinite",
            },
            "@keyframes twinkle": {
              "0%": { opacity: 0.4 },
              "50%": { opacity: 0.8 },
              "100%": { opacity: 0.4 },
            },
            "@keyframes drift": {
              "0%": {
                backgroundPosition: "0 0, 50px 50px, 100px 100px, 25px 25px",
              },
              "100%": {
                backgroundPosition:
                  "100px 100px, 150px 150px, 200px 200px, 125px 125px",
              },
            },
          }}
        />
        {/* Navbar */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: "background.default",
            top: 0,
            zIndex: 1100, // Ensure AppBar is above starry background and content
          }}>
          <Toolbar>
            {isMobile ? (
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 50,
                  width: 40,
                  height: 40,
                  overflow: "hidden",
                }}
                width={20}
                height={20}>
                <Image
                  src={"/images/logo.png"}
                  alt={`Home image`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ) : (
              <>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: 50,
                    width: 40,
                    height: 40,
                    overflow: "hidden",
                    marginRight: 2,
                  }}
                  width={20}
                  height={20}>
                  <Image
                    src={"/images/logo.png"}
                    alt={`Home image`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  ATLAS TRADE TEKNOLOJI ELEKTRONIK VE OTOMOTIV SANAYI TICARET
                  ANONIM SIRKETI
                </Typography>
              </>
            )}
            {navLinks.map((link) => (
              <Button
                key={link.id}
                color="inherit"
                onClick={() => router.push("/")}
                sx={{ mx: isMobile ? 0 : 1, fontSize: isMobile ? 12 : 16 }}>
                {link.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            bgcolor: theme.palette.background.default,
            minHeight: "100vh",
            color: theme.palette.text.primary,
          }}>
          {/* Privacy Policy Content */}
          <Container sx={{ py: 8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center" gutterBottom>
                Privacy Policy
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We are committed to protecting and respecting the privacy of
                your personal information.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Last updated on October 7th, 2025.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                This Privacy Policy (hereafter referred to as the “Privacy
                Policy”) relates to the website http://www.atlastrade.com.tr
                (hereafter referred to as the “website” or the “site”), the
                services provided by ATLAS TRADE TEKNOLOJİ ELEKTRONİK VE
                OTOMOTİV SANAYİ TİCARET ANONİM ŞİRKETİ (hereinafter referred to
                as the "Company", the owner and operator of the Site), and any
                related software applications (‘Apps’) where personal data
                relating to You is processed by the same (via the Site, any of
                Our Apps or otherwise).
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                ATLAS TRADE TEKNOLOJİ ELEKTRONİK VE OTOMOTİV SANAYİ TİCARET
                ANONİM ŞİRKETİ is a company that buys and sells equipment and
                software.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                This Privacy Policy is issued on behalf of Company and its
                affiliates, so when it mentions Company, “We”, “Us”, or “Our” in
                this Privacy Policy, We are referring to the relevant entity in
                Company responsible for processing your data.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                In the Privacy Policy, “You”, “Your”, and “User” refer to an
                identified or identifiable natural person being the User of the
                Site and/or client (or prospective client) of any of Our
                Services.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                This Privacy Policy outlines the manner in which Company handles
                the information and personal data which You have provided to Us
                and which enables Us to be able to manage the relationship which
                You have with Us effectively.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                1. Purpose of this Privacy Policy
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We are committed to respecting and protecting your privacy at
                all times. Company will not sell, rent, transfer, or otherwise
                make available to others any information about any person
                visiting Our Website except as expressly provided for in this
                Privacy Policy.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                The purpose of this Privacy Policy is to:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Set out the type of personal data Company will collect from
                you and how We will use your personal information
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Set out the basis on which any personal data is processed by
                Company.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Make you aware of how Company will handle your personal data.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Clarify Company obligations under the data protection
                regulations with regard to processing your personal data
                lawfully and responsibly.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                • Inform you of your data protection rights.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                2. The legal basis by which We process your personal data
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                All processing of Personal Data performed by Company as
                envisaged in this Privacy Policy shall be carried out in line
                with:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                The National Data Protection Act No. 6698 (NDA), which entered
                into force on 7 April 2016 (Kişisel Verilerin Korunmasi Kanunu №
                6698), is based on the principles of the European Union's GDPR.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We will comply with local data protection laws in the
                jurisdictions We operate in.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                This Privacy Policy should be read in conjunction with Our
                Cookie Policy, and any other Privacy Notices We may provide on
                specific occasions when We are collecting or processing personal
                data about you so that you are fully aware of how and why We are
                using your data.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                3. Personal data We collect from you
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. It
                does not include data where the identity has been removed
                (anonymous data). We have structured Our Website so that you can
                visit Us on the internet without identifying yourself or
                revealing any personal information. Once you choose to provide
                Us with personal information, we will protect such information
                and use it only in the ways described below.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We will collect and process the following personal data about
                you:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                a) Contact Data includes billing address, mailing address, email
                address and contact numbers.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                b) Technical Data includes internet protocol (IP) address, your
                login data, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform, as well as other information regarding your
                experience on Our Website such as page response times, download
                errors, length of visits to certain pages, page interaction
                information (such as scrolling, clicks, and mouse-overs), and
                methods used to browse away from the page.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                Location information: We may receive information about your
                location and may determine your location through your IP address
                and, when accessing the Website through a mobile device, by
                using the data that We collect from that device. This includes
                information about the wireless networks or cell towers near your
                mobile device at the time of access.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                Our Website uses cookies to distinguish you from other users of
                Our Website. This helps ensure that We provide you with a good
                experience when you browse Our Website and allows Us to improve
                it. For detailed information on the cookies We use and the
                purposes for which We use them, see Our Cookie Policy.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                c) Marketing and Communications Data includes your preferences
                in receiving marketing from Us and Our third parties or
                associated entities and your communication preferences. This may
                include information on whether you have subscribed or
                unsubscribed from any of Our mailing lists, attended any of Our
                events or accepted any of Our invitations.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                We will also collect, record, use and process any other personal
                information you voluntarily choose to provide or disclose to Us
                where relevant and necessary to provide the Services you
                requested.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                4. How is your personal data collected
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                You may provide such information in the following circumstances:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Filling in an enquiry form on the Website,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Corresponding with Us by post, phone, video calls, e-mail, or
                otherwise when you apply for Our services,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Subscribing to Our services or publications,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Requesting marketing to be sent to you,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Giving Us some feedback,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Starting negotiations for or entering into a contract to
                supply goods and/or services to us.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Whenever you visit Our Website, We will automatically collect
                Technical data.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                • We may receive personal data about you from various third
                parties and publicly available sources.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                5. How We use your personal data
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We shall use this information:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • To facilitate the provision of the services that you request
                and where We need to perform the contract We are about to enter
                into or have entered into with you,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Where it is necessary for Our legitimate interests (or those
                of a third party), and where your interests and fundamental
                rights do not override those interests,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Where We need to comply with a legal or regulatory obligation,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • To resolve any issues that you have reported and to provide
                support-related services,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • To manage the supplier relationship you have with us,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • To administer Our Website and for internal operations,
                including troubleshooting, and to keep Our Website safe and
                secure,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • To improve Our Website to ensure that content is presented
                most effectively for you,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                • To ensure that content displayed on the Website is presented
                in a user-friendly manner.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                6. Legal Basis for processing
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We shall only process your personal data insofar as this is
                necessary for Us to provide the services We offer and/or for the
                purposes indicated in this Privacy Policy.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We may also process your personal data based on any legitimate
                interest or to comply with any legal obligations. These
                interests and obligations may include the exercise or defence of
                legal claims or to comply with an order of any court, tribunal,
                authority, or disclosure to a government or regulatory entity.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Generally, We do not rely on consent as a legal basis for
                processing your personal data. However, where your consent is
                required, We will provide you with a form requesting explicit
                consent to do so.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                7. Marketing
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                You will receive marketing communication if you have requested
                such information from Us by providing Us with your details
                through this Website and have consented and opted-in to
                receiving such information. Where We have entered a business
                relationship (namely a contract) with you, We may inform you
                about Our activities, offers, or other information that We
                believe would be useful to you in accordance with Our legitimate
                interest.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Without your explicit consent, we will not share your personal
                data with any third party for marketing purposes.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                8. Disclosure of your personal data
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We may be required to share your data with local agents or other
                service suppliers (in their capacity as data processors), which
                is necessary for Us to provide the services you request. These
                local agents and suppliers store and process your data based on
                strict confidentiality and are subject to the appropriate
                security measures and safeguards.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We may also share your data with other third parties in their
                capacity as data controllers, such as legal, tax, real estate,
                immigration or other advisors and consultants, (international)
                banks for payment details, or third parties providing other or
                additional services or goods to you such as real estate
                agencies, owners, or developers who you might wish to engage
                with under separate terms and conditions between you and such
                third parties. These third parties will process your data in
                their own right as data controllers, and their data protection
                policies and processes shall become applicable.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                We may also disclose or share your data if We are under a duty
                to do so to comply with any legal obligation or judgment or
                under an order from a court, tribunal, or authority. We may also
                disclose your data to enforce Our terms of use or to protect Our
                rights, property, or safety, that of Our partners or other users
                of Our Website. This includes exchanging information with other
                companies and organizations for the purposes of anti-money
                laundering or KYC checks, compliance with anti-bribery or
                corruption laws, and/or fraud protection.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                9. Transfers of data to third countries
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Where We share your personal data with internal or external
                third parties, this may involve transferring your data outside
                the Turkey. We will transfer your personal data in accordance
                with standard contractual clauses to ensure that your personal
                data is protected and transferred securely in compliance with
                applicable laws.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                10. Third-party access to your personal data
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                We work closely with third parties to provide you with the
                services you request on Our Website. These third parties include
                cloud storage providers, analytics providers, and search engine
                information providers. We will only work with third-party
                providers that comply with applicable laws in the jurisdictions
                in which We operate.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                11. Data security
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We will ensure that appropriate security measures are taken
                against unlawful or unauthorized processing of personal data and
                the accidental loss of or damage to personal data. In addition,
                We limit access to your personal data to those employees,
                agents, contractors and other professional third parties who
                strictly need to know this information. They will only process
                your personal data on Our instructions and are subject to a duty
                of confidentiality. All of Our employees and agents have
                received appropriate training on data protection.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                The transfer of information between Our Website and your device
                is protected with transport layer security (TLS) certificates.
                When the Website is accessed using compatible browsers, that
                technology protects personal information using both server
                authentication and data encryption to ensure that personal
                information is safe and secure while in transit.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                All personal data is stored in a secure server environment that
                uses a firewall and other advanced technology to protect against
                interference or unauthorized access. Usernames and passwords are
                issued to persons authorized to access the personal data, such
                as Our employees, who are bound by confidentiality not to
                disclose any personal data.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                No data transmission method is 100% secure, and absolute
                security cannot be guaranteed.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                12. Data retention
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We shall only store your data as long as it is strictly
                necessary for the purposes for which it was collected (that is,
                to provide you with Our services or to satisfy any legal,
                accounting, or reporting requirements).
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 2, px: isMobile ? 0 : 25 }}>
                We will only retain your personal data for as long as necessary
                to fulfil the purposes for which We collected it (the provision
                of the Services and the ongoing performance of Our professional
                relationship with you) and, thereafter, for the purpose of
                satisfying any legal, accounting, tax, anti-money laundering and
                regulatory reporting requirements or obligations to which We may
                be subject and/or to the extent that We may also need to retain
                your personal data to be able to assert, exercise or defend
                possible future legal claims against or otherwise involving you.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                By and large, Our retention of your personal data shall not
                exceed the period of six (6) years from the termination of your
                engagement with Company.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                13. Data minimisation
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Whenever and to the extent possible, We anonymize the data that
                We hold about you when it is no longer necessary to identify you
                from that data.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                14. Your rights as a data subject
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                1. The right to correction. You have the right to obtain
                correction of any inaccurate personal data about you that We
                have processed, update any data that is out-of-date, and
                complete any incomplete personal data, including by means of a
                supplementary statement.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                2. The right to erasure. You have the right to obtain the
                erasure of personal data We have concerning you when it is no
                longer required, for cases where:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • You withdraw your consent to Us processing your personal data
                on which the processing is originally based or where no other
                legal grounds for processing exists,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Your personal data is no longer necessary in relation to the
                purpose for which it was originally collected,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • You object to the processing and there are no overriding
                legitimate grounds for the processing for marketing
                communication,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Your personal data has been unlawfully processed,
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                • Your personal data must be erased to comply with a legal
                obligation to which We are subject.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                Note, however, that We may not always be able to comply with
                your request of erasure for specific legal reasons, which will
                be notified to you, if applicable, at the time of your request.
                These may include instances where the retention of your personal
                data is necessary to comply with a legal or regulatory
                obligation to which We are subject; or establish, exercise or
                defend a legal claim.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3. The right to data portability. We will provide to you, or a
                third party you have chosen, your personal data in a structured,
                commonly used, machine-readable format.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                4. Right to withdraw consent. Where you may have provided your
                consent to the collection, processing, and transfer of your
                personal information for a specific purpose (for example, for
                marketing), you have the right to withdraw your consent for that
                specific processing at any time, or you may withdraw your
                consent to this Privacy Policy. Once We have received
                notification that you have withdrawn your consent, We will no
                longer process your information for that purpose unless We have
                another legitimate basis for doing so in law. Withdrawal of
                consent to this Privacy Policy will result in Us having to
                terminate Our services with you immediately.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                15. Law applicable to disputes
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                The Privacy Policy and its subject matter are governed by
                Turkish law. You hereby agree that the courts of Turkey shall
                have exclusive jurisdiction in relation to any claim, dispute or
                difference concerning the Engagement Letter and any matter
                arising from it. Each party irrevocably waives any right it may
                have to object to an action being brought in those courts, to
                claim that the action has been brought in an inconvenient forum,
                or to claim that those courts do not have jurisdiction.
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                16. Changes to this Privacy Policy
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
                Any changes We make to this Privacy Policy in the future will be
                posted on this page and, where appropriate, notified to you via
                e-mail.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        <Box sx={{ bgcolor: "background.default", p: 2, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} ATLAS TRADE TEKNOLOJI ELEKTRONIK VE
            OTOMOTIV SANAYI TICARET ANONIM SIRKETI. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
