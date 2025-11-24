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
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
      primary: "#8D99AE", // Atlas Trade text color
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

export default function UserAgreement() {
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
          position: "relative",
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
            pointerEvents: "none",
            overflow: "hidden",
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

        {/* User Agreement Content */}

        <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
          <Container sx={{ py: 8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <Typography variant="h3" align="center" gutterBottom>
                User Agreement
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                Last updated on November 12, 2025.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                1. General Conditions
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                1.1. This User Agreement (‘Agreement’) applies to the website
                available at http://www.atlastrade.com.tr (hereinafter referred
                to as the "Website").
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                1.2. The Website is owned by a legal entity, ATLAS TRADE
                TEKNOLOJI ELEKTRONIK VE OTOMOTIV SANAYI TICARET ANONIM SIRKETI
                (hereinafter referred to as the "Website Owner" or the "Website
                Administration").
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                1.3. This Agreement, including all appendices hereto, governs
                the relationship between the User and the Website
                Administration.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                1.4. The Website of ATLAS TRADE TEKNOLOJI ELEKTRONIK VE OTOMOTIV
                SANAYI TICARET ANONIM SIRKETI is not a mass media or trading
                platform. It is an informational resource of the company ATLAS
                TRADE TEKNOLOJI ELEKTRONIK VE OTOMOTIV SANAYI TICARET ANONIM
                SIRKETI.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                1.5. The Administration reserves the right to unilaterally amend
                the terms of this Agreement without prior notice to Users, by
                posting the updated version on the Website at the above address.
                The provisions of the new version become mandatory for all Users
                from the date of its entry into force.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                1.6. The Administration grants the User the right to use the
                Website in accordance with the procedure and under the
                conditions set forth in this Agreement, and the User agrees to
                comply with these terms.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                2. Terms and Definitions
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                2.1. The following terms are used in this Agreement:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                2.1.1. "Administration" means ATLAS TRADE TEKNOLOJI ELEKTRONIK
                VE OTOMOTIV SANAYI TICARET ANONIM SIRKETI, which holds exclusive
                rights to the Website.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                2.1.2. "User" means any person who has accepted the offer at
                http://www.atlastrade.com.tr.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                2.1.3. "Content" means the intellectual property of the Website
                Owner, including texts, titles, prefaces, annotations, articles,
                illustrations, covers, musical works, graphic, textual,
                photographic, derivative, composite works, user interfaces,
                visual interfaces, trademarks, logos, computer programs,
                databases, as well as the design, structure, selection, layout,
                general style, and location of such content on the Website,
                whether individually or collectively.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                2.2. Other terms and definitions used in this Agreement shall be
                interpreted in accordance with the laws of the Republic of
                Türkiye.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                2.3. Headings used in this Agreement are for convenience only
                and shall not affect interpretation.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                3. Subject of the Agreement
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.1. This Agreement governs access to the information contained
                on the Website and services provided to the User.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.2. The Website provides Users with the following services:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.2.1. Access to the Website's search and navigation tools;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.2.2. Access to information about services and works provided
                by ATLAS TRADE TEKNOLOJI ELEKTRONIK VE OTOMOTIV SANAYI TICARET
                ANONIM SIRKETI.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.3. All existing and future services of the Website are subject
                to this Agreement.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.4. Access to the Website is voluntary.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                3.5. This Agreement does not constitute a public offer.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                3.6. Use of the Website and its materials is regulated by the
                legislation of the Republic of Türkiye.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                4. Rights and Obligations of the Parties
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.1. The User has the right to:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.1.1. Use the Website and the available services and review the
                Content without restrictions;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.1.2. Contact the Website Administration with questions related
                to the Website content by email or other feedback methods
                available on the Website;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.1.3. Use the Website solely for purposes allowed by this
                Agreement and Turkish law.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.2. The Administration has the right to:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.2.1. Create, modify, and cancel rules for using the Website
                and its Content. Changes become effective upon publication on
                the Website;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.2.2. Restrict access to the Website or specific information on
                the Website if the User violates this Agreement;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.2.3. Remove materials from the Website or temporarily suspend
                access without prior explanation.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3. The User undertakes to:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.1. Provide additional information upon the Administration's
                request, if directly related to the Website services;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.2. Respect the property and intellectual rights of authors
                and copyright holders;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.3. Avoid actions violating confidentiality protected by
                Turkish law;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.4. Not distribute advertising materials without the
                Administration's consent;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.5. Not disrupt the Website's functionality;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.6. Not use automated devices, scripts, algorithms, or other
                methods to access, copy, or track Website content unlawfully;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.7. Not use the Website for downloading content that is
                illegal or violates third-party rights, promotes violence,
                hatred, discrimination, false information, or insults;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.8. Not attempt to gain unauthorized access خرو
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.9. Not compromise the Website's security or authentication
                systems;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.10. Not track or attempt to track other Users’ information;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                4.3.11. Not bypass the Website’s navigation structure to obtain
                information or materials not provided by the Website's services.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                4.4. The Administration undertakes to maintain Website
                functionality except when impossible due to reasons beyond its
                control.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                5. Using the Website
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                5.1. The Website and its Content are owned and managed by the
                Website Administration.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                5.2. Content may not be copied, published, reproduced,
                transmitted, or distributed without prior written consent from
                the Website Administration.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                5.3. Content is protected by copyright, trademark, intellectual
                property, and competition laws.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                5.4. This Agreement governs all additional terms regarding works
                or services provided on the Website.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                5.5. Information posted on the Website does not alter this
                Agreement.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                5.6. The Website Administration may change the list of offered
                works and services at any time without notifying Users.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                6. Liability
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                6.1. The Administration is not liable for any losses incurred by
                the User due to intentional or negligent violations of this
                Agreement.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                6.2. The Administration is not responsible for:
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                6.2.1. Delays or failures due to force majeure or malfunctions
                in telecommunication, computer, electrical, or related systems;
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                6.2.2. The proper functioning of the Website if the User lacks
                necessary technical means and is not obliged to provide such
                means.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                7. Violations
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                7.1. The Administration may disclose User information as
                required or permitted under Turkish law.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                7.2. The Administration may suspend or terminate User access
                without prior notice if the User breaches this Agreement or
                other related documents or if the Site is terminated or
                malfunctions.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                7.3. The Administration is not liable for damages resulting from
                such suspension or termination.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 1, px: isMobile ? 0 : 25 }}>
                7.4. The Administration may disclose User information as
                necessary for investigating misuse or protecting rights of the
                Administration and other Users.
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                7.5. The Administration may disclose User information as
                necessary to comply with Turkish law or court orders and to
                enforce this Agreement.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                8. Governing Law and Disputes
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 4, px: isMobile ? 0 : 25 }}>
                8.1. This Agreement is governed by the laws of the Republic of
                Türkiye. All disputes arising from or related to this Agreement
                shall be resolved in the courts of the Republic of Türkiye.
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ px: isMobile ? 0 : 25 }}>
                9. Changes to this Agreement
              </Typography>
              <Typography
                paragraph
                align="justify"
                fontSize={14}
                sx={{ mb: 6, px: isMobile ? 0 : 25 }}>
                9.1. Any changes to this Agreement will be published on this
                page and, if appropriate, notified to Users by email.
              </Typography>
              <Typography
                paragraph
                align="right"
                fontWeight="bold"
                sx={{ px: isMobile ? 0 : 25, mb: 4 }}>
                ATLAS TRADE TEKNOLOJI ELEKTRONIK VE OTOMOTIV SANAYI TICARET
                ANONIM SIRKETI
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Footer */}
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
