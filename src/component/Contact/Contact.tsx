import React, { ReactNode, MouseEventHandler } from 'react'
import css from './Contact.module.scss'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { MenuItem } from '@material-ui/core'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'
import HandsUpTxt from '../Util/HandsUpTxt/HandsUpTxt'
import PickUpTxt from '../Util/PickUpTxt/PickUpTxt'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            '& label.Mui-focused': {
                color: 'rgb(96, 151, 133)',
            },
        },
        input: {
            color: 'rgb(96, 151, 133)',
            '& input': {
                color: 'rgb(96, 151, 133)',
            },
        }
    }),
)


type Props = {
    children?: ReactNode
}

const currencies = [
    {
        label: '未選択',
        value: '未選択',
    },
    {
        label: '駅（フォーム）',
        value: '駅（フォーム）',
    },
    // {
    //     label: 'パターン2',
    //     value: '002',
    // },
    // {
    //     label: 'パターン3',
    //     value: '003',
    // },
    // {
    //     label: 'パターン4',
    //     value: '004',
    // },
];

const isStringNull = (val: string): boolean => {
    if (val == null || val == '') {
        return true
    }
    return false
}

const Contact = () => {

    // 画面遷移用宣言
    const router = useRouter()

    const [companyName, setCompanyName] = React.useState('')
    const [name, setName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [mailAddress, setMailAddress] = React.useState('')
    const [url, setUrl] = React.useState('')
    const [currency, setCurrency] = React.useState('未選択')
    const [remarks, setRemarks] = React.useState('')


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

    const handleSetRemarks = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemarks(event.target.value);
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
            remarks,
        }
        fetch('/api/contact', {
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
                setCurrency('未選択')
                setRemarks('')


            }
        })
        setTimeout(() => {
            router.push('/contactDone')
        }, 0);
    }

    return (
        <div className={css.contentWrapper}>
            <div className={css.content}>
                <div className={css.itemWrapper} id='contact'>
                    <SubjectTitle text='お問い合わせ'></SubjectTitle>
                    <PickUpTxt>※動画制作依頼の場合はパターン選択・URLの設定をお願いいたします。</PickUpTxt>
                    <form className={css.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                        <TextField
                            id="pattern"
                            select
                            label="パターン選択"
                            value={currency}
                            onChange={handleSetCurrency}
                            className={css.textArea}
                            helperText="※使用する360°空間のパターンを選択してください"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="URL"
                            label="動画URL"
                            className={css.textArea}
                            fullWidth={true}
                            value={url}
                            onChange={handleSetUrl}
                        />
                        <HandsUpTxt>※動画データがURLで共有可能な「ギガファイル便」、「Googleドライブ」を記載</HandsUpTxt>
                        <TextField
                            id="contact"
                            label="お問い合わせ"
                            className={css.textArea}
                            fullWidth={true}
                            multiline
                            rows={4}
                            variant='outlined'
                            value={remarks}
                            onChange={handleSetRemarks}
                        />
                        {!isStringNull(companyName) && !isStringNull(name) && !isStringNull(mailAddress) && phoneNumber != null ? (
                            <button className={css.contactBtn} type='submit'>
                                送信
                            </button>
                        ) : (
                                <div className={css.notActivBtn}>
                                    送信
                            </div>
                            )}
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact
