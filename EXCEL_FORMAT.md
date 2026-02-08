# Excel 파일 업로드 가이드

## 지원 형식
- `.xlsx` (Excel 2007 이상)
- `.xls` (Excel 97-2003)
- `.csv` (쉼표로 구분된 값)

## 필수 열(Column) 이름

Excel 파일의 첫 번째 행에 다음 열 이름을 포함해야 합니다:

| 열 이름 | 필수 여부 | 설명 | 예시 |
|---------|----------|------|------|
| `title` 또는 `Title` | 필수 | 논문 제목 | "Advanced Machine Learning Techniques" |
| `authors` 또는 `Authors` | 필수 | 저자 목록 | "Kim, J., Lee, S., Park, H." |
| `venue` 또는 `Venue` | 필수 | 학회/저널 이름 | "ICML 2025" |
| `year` 또는 `Year` | 필수 | 발표 연도 | "2025" |
| `doi` 또는 `DOI` | 선택 | DOI 번호 | "10.1234/icml.2025.001" |
| `url` 또는 `URL` | 선택 | 논문 링크 | "https://example.com/paper.pdf" |

## 샘플 Excel 파일 구조

```
| title                                              | authors                | venue                          | year | doi                    | url                        |
|----------------------------------------------------|------------------------|--------------------------------|------|------------------------|----------------------------|
| Advanced Machine Learning Techniques               | Kim, J., Lee, S.       | ICML 2025                      | 2025 | 10.1234/icml.2025.001  | https://example.com/paper1 |
| Optimization Algorithms for Large-Scale Systems    | Lee, S., Choi, M.      | IEEE Transactions on Systems   | 2024 | 10.1234/ieee.2024.002  |                            |
| Real-time Data Processing in Distributed Systems   | Park, H., Kim, J.      | ACM Cloud Computing            | 2024 |                        | https://example.com/paper3 |
```

## 주의사항

1. **열 이름 대소문자**: 대소문자를 구분하지 않습니다 (`title`, `Title` 모두 가능)
2. **빈 값**: 선택 항목(DOI, URL)은 비워둘 수 있습니다
3. **데이터 검증**: title과 authors가 없는 행은 자동으로 제외됩니다
4. **첫 번째 시트**: Excel 파일의 첫 번째 시트만 읽습니다

## 업로드 방법

1. Publications 페이지로 이동
2. "Excel 파일 업로드" 섹션에서 "파일 선택" 버튼 클릭
3. 위 형식에 맞는 Excel 파일 선택
4. 업로드 완료 후 논문 목록이 자동으로 업데이트됩니다

## 문제 해결

- **"유효한 논문 데이터를 찾을 수 없습니다"** 오류: 열 이름이 올바른지 확인하세요
- **"파일 파싱 중 오류가 발생했습니다"** 오류: 파일이 손상되지 않았는지, 올바른 형식인지 확인하세요
