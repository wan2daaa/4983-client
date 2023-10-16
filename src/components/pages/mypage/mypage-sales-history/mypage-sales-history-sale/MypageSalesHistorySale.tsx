import { useEffect, useState } from "react";
import Link from "next/link";
import * as style from "@/components/pages/mypage/mypage-sales-history/mypage-sales-history-sale/MypageSalesHistorySale.style";
import MypageSalesContent from "@/components/pages/mypage/mypage-sales-history/mypage-sales-content/MypageSalesContent";
import { SalesHistoryList } from "@/apis/user/User";

interface Book {
    imageUrl: string;
    bookStatus: string;
    name: string;
    tradeAvailableDatetime: string;
    createdAt: string;
    price: number;
    usedBookId: number;
}

export default function MypageSalesHistorySale() {
    const [usedBooks, setUsedBooks] = useState<Book[]>([]);
    const canBuy = true;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SalesHistoryList(canBuy);

                setUsedBooks(data);
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <style.Div>
            <style.Title>
                아직 판매 이력이 없어요!
                <style.Br />
                상경관에서 쉽게 전공서적을 판매해보세요!
            </style.Title>
            <Link href="/">
                <style.GoSalesButton>판매하러 가기</style.GoSalesButton>
            </Link>
            <style.ContentDiv>
                {usedBooks.map((book, index) => (
                <MypageSalesContent key={index.toString()} book={book} />
                ))}
            </style.ContentDiv>
        </style.Div>
    );
}
