import Template from "../../components/Template";
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import CertificatePDF from "../../components/CertificatePDF";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
// import { certificados } from "../components/data";

export default function Certificados() {
	return (
		<>
			<div>
				<Template
					rol="admin"
					content={
						<div className="px-[4rem]">
							<PDFDownloadLink
								document={
									<CertificatePDF
										name="Kevin Villacreses"
										ci="1720598877"
										course="Ciberseguridad"
										description="Curso lalasdlasdlasdlasdlasdlasldlasdlasdlasd"
										dateFinal="14/5/2024"
										calification={100}
									/>
								}
								fileName="Proforma.pdf"
							>
								{({
									loading,
									// , blob, url, error
								}) =>
									loading ? (
										<img src="/loading.gif" className="w-[20px] " />
									) : (
										<IconButton aria-label="fingerprint" color="primary">
											<DownloadIcon />
										</IconButton>
									)
								}
							</PDFDownloadLink>
							<PDFViewer style={{width: "100%", height: "700px"}}>
								<CertificatePDF
									name="Kevin Villacreses"
									ci="1720598877"
									course="Ciberseguridad"
									description="Curso lalasdlasdlasdlasdlasdlasldlasdlasdlasd"
									dateFinal="14/5/2024"
									calification={100}
								/>
							</PDFViewer>
						</div>
					}
				/>
			</div>
		</>
	);
}
