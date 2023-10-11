import * as style from "@/components/pages/selling/for-sale/for-sale-book-name-form/ForSaleBookNameForm.style";

interface BookViewProps {
  bookName: string;
  publisher: string;
}
export default function ForSaleBookNameForm({
  bookName,
  publisher,
}: BookViewProps) {
  return (
    <style.Div>
      <style.ProfileDiv>
        <style.BookNameA>{bookName}</style.BookNameA>
        <style.PublisherA>{publisher}</style.PublisherA>
      </style.ProfileDiv>
    </style.Div>
  );
}
