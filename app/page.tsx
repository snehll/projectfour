"use client";
import React, { useState } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { Link, useMediaQuery } from "@mui/material";
import SuccessModal from "@/components/modal";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// Define the theme with black background and light blue text
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

// Animation variants for sections with explicit type
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const }, // Explicitly type ease
  },
};

// Navbar links
const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

// Open source image URLs from Pixabay (four per section)
const images = {
  home: ["/sparepart.jpg", "/aboutus.jpg", "/dryer.jpg", "/logistics.jpg"],
  about: [
    "/aboutus.jpg",
    "/industrialpump.jpg",
    "/equipmentsupply.jpg",
    "/rental.jpg",
  ],
  services: [
    "/turbines.jpg",
    "/equipments.png",
    "/compressor.jpg",
    "/sparepart.jpg",
  ],
  logo: "https://img.icons8.com/ios/50/ffffff/gear.png",}
// The following change is made to update the year from 2007 to 2025 in the About Us section
// Previous content: Since 2007, we have been innovating...

export default function Home() {
  const themes = useTheme();
  const isMobile = useMediaQuery(themes.breakpoints.down("lg"));

  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
    service: "",
    companyname: "atlas",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://email-xi-pearl.vercel.app/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setStatus(result);
      alert(result.message); // Matches your original alert-based feedback
      setFormData({
        email: "",
        message: "",
        name: "",
        service: "",
        companyname: "atlas",
      });
      setAgreedToTerms(false); // Reset checkbox after submission
    } catch (error: any) {
      setStatus({
        success: false,
        message: error.message || "Failed to send request",
      });
      alert("Error: " + error.message);
    }
  };

  // Smooth scroll handler
  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                onClick={() => scrollToSection(link.id)}
                sx={{ mx: isMobile ? 0 : 1, fontSize: isMobile ? 12 : 16 }}>
                {link.name}
              </Button>
            ))}
          </Toolbar>
        </AppBar>

        {/* Home Section */}
        <Box
          id="home"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid
                  width={isMobile ? "100%" : "35%"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Box sx={{ p: 2 }}>
                    <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
                      Welcome to
                    </Typography>
                    <Typography
                      fontWeight={"600"}
                      color="white"
                      variant={isMobile ? "h5" : "h4"}
                      gutterBottom>
                      ATLAS TRADE TEKNOLOJI ELEKTRONIK VE OTOMOTIV SANAYI
                      TICARET ANONIM SIRKETI
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      textAlign={isMobile ? "justify" : "left"}>
                      We specialize in the supply of spare parts for industrial
                      equipment such as generators, turbines, and more, for
                      production and resale.
                    </Typography>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outlined"
                      sx={{
                        borderWidth: 2,
                        borderColor: "#8D99AE",
                        borderRadius: 4,
                        px: 4,
                      }}>
                      Talk to Us
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  width={isMobile ? "100%" : "60%"}
                  sx={{ ml: 2, p: 1.5, borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    gap={2}>
                    {images.home.map((src, index) => (
                      <Grid width={isMobile ? "47.4%" : "48.7%"} key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            height: isMobile ? 200 : 250,
                            width: "100%",
                            border: 2,
                            borderColor: "#8D99AE",
                            borderRadius: 4,
                            overflow: "hidden",
                          }}>
                          <Image
                            src={"/images" + src}
                            alt={`Home image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* About Section */}
        <Box
          id="about"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid
                  width={isMobile ? "100%" : "50%"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                      About Us
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      textAlign={isMobile ? "justify" : "left"}>
                      Behind every shipment, there is a person who makes it
                      happen. Since 2025, the company has grown from a small
                      trading outfit into a global network that connects
                      industrial producers in the United States and Europe with
                      clients across international markets. Over the years, it
                      has managed thousands of deliveries, each one supported by
                      careful planning, clear communication, and long-term
                      relationships with manufacturers and logistics partners.
                      Today, the business continues to expand its reach while
                      keeping the same principle at its core: trade is about
                      people. Technology and global networks matter, but what
                      truly ensures success is the combination of expertise,
                      responsibility, and human attention that goes into every
                      delivery.
                    </Typography>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outlined"
                      sx={{
                        borderWidth: 2,
                        borderColor: "#8D99AE",
                        borderRadius: 4,
                        px: 4,
                      }}>
                      Talk to Us
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  width={isMobile ? "100%" : "47%"}
                  sx={{ ml: 2, p: 1.5, borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    gap={2}>
                    {images.about.map((src, index) => (
                      <Grid width={isMobile ? "47.4%" : "48.4%"} key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            height: isMobile ? 200 : 250,
                            width: "100%",
                            border: 2,
                            borderColor: "#8D99AE",
                            borderRadius: 4,
                            overflow: "hidden",
                          }}>
                          <Image
                            src={"/images" + src}
                            alt={`About image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Services Section */}
        <Box
          id="services"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Grid
                  width={isMobile ? "100%" : "50%"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center">
                  <Box sx={{ p: 2 }}>
                    <Typography variant="h4" gutterBottom>
                      Our Services
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      textAlign={isMobile ? "justify" : "left"}>
                      Individual sourcing of machinery and components to match
                      exact specifications. Consulting on customs, certification
                      and documentation. Flexible financial models with payments
                      handled in local or foreign currencies. Full support from
                      the first request to final delivery.
                      <br />
                      <br />
                      Equipment: <br />
                      Industrial power generation, air compression, pumping and
                      drying equipment, plus a full range of spare parts and
                      consumables. Only proven brands with documented quality.
                      <br />
                      <br />
                      Logistics Solutions:
                      <br /> Worldwide transport management including route
                      planning, insurance, and monitoring at every step. The
                      client sees clear timelines and receives equipment ready
                      to operate.
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      textAlign={isMobile ? "justify" : "left"}>
                      <strong>Equipment Specializations:</strong>
                      <br />
                      - Generators
                      <br />
                      - Turbines
                      <br />
                      - Compressors
                      <br />
                      - Pumps
                      <br />- Heat Exchangers
                    </Typography>
                    <Button
                      onClick={() => scrollToSection("contact")}
                      variant="outlined"
                      sx={{
                        borderWidth: 2,
                        borderColor: "#8D99AE",
                        borderRadius: 4,
                        px: 4,
                      }}>
                      Talk to Us
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  width={isMobile ? "100%" : "48.5%"}
                  sx={{ ml: 2, p: 1.5, borderRadius: 4 }}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    gap={2}>
                    {images.services.map((src, index) => (
                      <Grid width={isMobile ? "47.4%" : "48.5%"} key={index}>
                        <Box
                          sx={{
                            position: "relative",
                            height: isMobile ? 200 : 250,
                            width: "100%",
                            border: 2,
                            borderColor: "#8D99AE",
                            borderRadius: 4,
                            overflow: "hidden",
                          }}>
                          <Image
                            src={"/images" + src}
                            alt={`Services image ${index + 1}`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Section with Form */}
        <Box
          id="contact"
          sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <Container maxWidth="sm">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}>
              <Typography variant="h4" gutterBottom textAlign="center">
                Contact Us
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 500,
                  mx: "auto",
                }}>
                <Typography paragraph>
                  <b>Address</b>: RASIMPASA MAH. SОGUTLUCESME CAD. YALCINKAYA
                  NO: 103 IC KAPI NO: 8 KADIKOY/ISTANBUL/ 34716
                </Typography>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#8D99AE" } }}
                  InputProps={{ style: { color: "#8D99AE" } }}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  value={formData.name}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#8D99AE" } }}
                  InputProps={{ style: { color: "#8D99AE" } }}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  InputLabelProps={{ style: { color: "#8D99AE" } }}
                  InputProps={{ style: { color: "#8D99AE" } }}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  value={formData.message}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      sx={{
                        color: "#8D99AE",
                        "&.Mui-checked": { color: "#8D99AE" },
                      }}
                      // required
                    />
                  }
                  label={
                    <Typography sx={{ color: "#8D99AE" }}>
                      I agree to the{" "}
                      <Link
                        href="/terms-and-conditions"
                        sx={{ color: "#8D99AE", textDecoration: "underline" }}>
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/user-agreement"
                        sx={{ color: "#4fc3f7", textDecoration: "underline" }}>
                        Users agreement
                      </Link>
                    </Typography>
                  }
                  sx={{ mb: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#8D99AE",
                    color: "#000000",
                    "&:hover": { bgcolor: "#40c4ff" },
                  }}>
                  Talk to Us
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
        <SuccessModal status={status} onClose={() => setStatus(null)} />
        {/* Footer */}
        <Box sx={{ bgcolor: "background.default", p: 2, textAlign: "center" }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} ATLAS TRADE . All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
