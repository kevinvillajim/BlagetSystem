import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import CertificatePDF from "./CertificatePDF";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";

export default function Certificados({
  name,
  ci,
  course,
  description,
  date,
  calification,
}) {
  return (
    <>
      <div className="px-[4rem]">
        <PDFDownloadLink
          document={
            <CertificatePDF
              name={name}
              ci={ci}
              course={course}
              description={description}
              dateFinal={date}
              calification={calification}
            />
          }
          fileName="CerificadoCurso1.pdf"
        >
          {({
            loading,
            // , blob, url, error
          }) =>
            loading ? (
              <img
                src="/loading.gif"
                className="w-[20px] "
              />
            ) : (
              <IconButton
                aria-label="fingerprint"
                color="primary"
              >
                <DownloadIcon />
              </IconButton>
            )
          }
        </PDFDownloadLink>
        <PDFViewer style={{ width: "100%", height: "500px" }}>
          <CertificatePDF
            name={name}
            ci={ci}
            course={course}
            description={description}
            dateFinal={date}
            calification={calification}
          />
        </PDFViewer>
      </div>
    </>
  );
}
