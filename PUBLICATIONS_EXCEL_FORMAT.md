# Publications Excel Format Guide

## Excel 파일 구조

Publications 데이터를 Excel 파일에서 불러오기 위한 형식입니다.

### 필수 열 (Columns)

| 열 이름 | 데이터 타입 | 설명 | 예시 |
|--------|-----------|------|------|
| Type | Text | Journal 또는 Conference | Journal |
| Year | Number | 발행 연도 | 2025 |
| Title | Text | 논문 제목 | EdgeDiff: Energy-Efficient... |
| Venue | Text | 학회/저널명 | IEEE Journal of Solid-State Circuits (JSSC) |
| Authors | Text | 저자 (쉼표로 구분) | Sangjin Kim, Jungjun Oh, ... |
| Status | Text (선택) | Invited, Accepted 등 | Invited |

### 예시 데이터

```
Type,Year,Title,Venue,Authors,Status
Journal,2025,EdgeDiff: Energy-Efficient Multi-Modal Few-Step Diffusion Model Accelerator using Mixed-Precision and Reordered Group Quantization,IEEE Journal of Solid-State Circuits (JSSC),Sangjin Kim; Jungjun Oh; Jeonggyu So; Yuseon Choi; Sangyeob Kim; Dongseok Im; Gwangtae Park; Hoi-Jun Yoo,Invited
Journal,2025,LightRot: A Light-weighted Rotation Scheme and Architecture for Accurate Low-bit Large Language Model Inference,IEEE Journal on Emerging and Selected Topics in Circuits and Systems (JETCAS),Sangjin Kim; Yuseon Choi; Jungjun Oh; Byeongcheol Kim; Hoi-Jun Yoo,
Conference,2026,GyRot: Leveraging Hidden Synergy between Rotation and Fine-grained Group Quantization for Low-bit LLM Inference,IEEE International Symposium on High-Performance Computer Architecture (HPCA),Sangjin Kim; Yuseon Choi; Byeongcheol Kim; Jungjun Oh; Hoi-jun Yoo,
```

### 파일 형식

- **파일명**: `publications.xlsx` 또는 `publications.csv`
- **인코딩**: UTF-8 (CSV의 경우)
- **첫 행**: 헤더 포함

## 사용 방법

1. Excel 파일을 생성하고 위 형식에 맞게 데이터를 입력합니다.
2. 웹사이트의 Publications 페이지에서 Excel 파일을 업로드합니다.
3. 자동으로 Journal과 Conference로 분리되고 연도별로 정렬됩니다.

## 주의사항

- 저자명은 세미콜론(`;`)으로 구분하세요 (쉼표는 CSV 구분자이므로 피하세요)
- Status 열은 선택사항입니다 (비워두어도 됨)
- Year는 숫자로 입력하세요
- Type은 정확히 "Journal" 또는 "Conference"로 입력하세요 (대소문자 구분)
