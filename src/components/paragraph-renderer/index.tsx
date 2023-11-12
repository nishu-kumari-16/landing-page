import { Typography } from "@mui/material";

const ParagraphRenderer = ({ text }: { text: string }) => (
  <div>
    {text.split("\n\n").map((paragraph) => (
      <Typography fontSize={14}>
        {paragraph
          .split("\n")
          .reduce((total, line) => [total, <br />, line] as any)}
      </Typography>
    ))}
  </div>
);
export default ParagraphRenderer;
