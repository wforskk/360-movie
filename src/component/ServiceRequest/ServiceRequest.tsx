import React from 'react'
import css from './ServiceRequest.module.scss'
import TextField from '@material-ui/core/TextField'
import { MenuItem } from '@material-ui/core'
import HandsUpTxt from '../Util/HandsUpTxt/HandsUpTxt'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { selectAreaList } from '../../static/selectAreaList'
import Button from '../Util/Button/Button'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'

const hasStringData = (list = ['']): boolean => {
    let result = true

    for (let item of list) {
        if (result && (item == null || item == '')) {
            result = false
        }

    }

    return result
}

// 選択したエリアの情報取得処理
const getSelectedAreaInfo = (val: string) => {
    const item = selectAreaList.filter(list => list.id === val)
    return item[0]
}

// 選択したエリアの画像要素取得処理ï
const getImageCompo = (val: string) => {
    const item = getSelectedAreaInfo(val)
    let el: JSX.Element
    if (item != null && item.id != '000') {

        el = <div className={css.image}>
            <Image
                src={item.url}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
            />
        </div>

    } else {
        el = <div className={css.image}>
            <div className={css.blankContent}>
                <HandsUpTxt>未選択のため画像表示なし</HandsUpTxt>
            </div>
        </div>
    }
    return el
}

const ServiceRequest = () => {

    // 画面遷移用宣言
    const router = useRouter()

    const [companyName, setCompanyName] = React.useState('')
    const [name, setName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [mailAddress, setMailAddress] = React.useState('')
    const [url, setUrl] = React.useState('')
    const [currency, setCurrency] = React.useState('000')

    const handleSetCompanyName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(event.target.value);
    }

    const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSetPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    }

    const handleSetMailAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailAddress(event.target.value);
    }

    const handleSetUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }

    const handleSetCurrency = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    }
    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        let data = {
            companyName,
            name,
            phoneNumber,
            mailAddress,
            url,
            currency,
        }
        fetch('/api/serviceReq', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                setCompanyName('')
                setName('')
                setPhoneNumber('')
                setMailAddress('')
                setUrl('')
                setCurrency('000')

            }
        })
        setTimeout(() => {
            router.push('/contactDone')
        }, 0);
    }

    return (
        <form className={css.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <SubjectTitle text='作成依頼'></SubjectTitle>
            <div className={css.section}>
                <div className={css.sectionTitle}>サービス利用情報入力欄</div>
                <TextField
                    id="pattern"
                    select
                    label="パターン選択"
                    value={currency}
                    onChange={handleSetCurrency}
                    className={css.textArea}
                    helperText="※使用する360°空間のパターンを選択してください"
                >
                    {selectAreaList.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                {getImageCompo(currency)}
                <TextField
                    id="URL"
                    label="動画URL"
                    className={css.textArea}
                    fullWidth={true}
                    value={url}
                    onChange={handleSetUrl}
                />
                <HandsUpTxt>※動画データがURLで共有可能な「ギガファイル便」、「Googleドライブ」を記載</HandsUpTxt>
            </div>
            <div className={css.section}>
                <div className={css.sectionTitle}>お客様情報入力欄</div>
                <TextField
                    id="companyName"
                    label="会社名"
                    className={css.textArea}
                    fullWidth={true}
                    value={companyName}
                    onChange={handleSetCompanyName}
                />
                <TextField
                    id="name"
                    label="氏名"
                    className={css.textArea}
                    fullWidth={true}
                    value={name}
                    onChange={handleSetName}
                />
                <TextField
                    id="phoneNumber"
                    label="電話番号"
                    className={css.textArea}
                    fullWidth={true}
                    value={phoneNumber}
                    onChange={handleSetPhoneNumber}
                />
                <TextField
                    id="mailAddress"
                    type='mail'
                    label="メールアドレス"
                    className={css.textArea}
                    fullWidth={true}
                    value={mailAddress}
                    onChange={handleSetMailAddress}
                />
            </div>
            <div className={css.submitBtn}>
                <Button disabled={!hasStringData([companyName, name, phoneNumber, mailAddress])} type='submit'>送信</Button>
            </div>
        </form>

    )
}

export default ServiceRequest
