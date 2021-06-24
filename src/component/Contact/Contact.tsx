import React from 'react'
import css from './Contact.module.scss'
import TextField from '@material-ui/core/TextField'
import SubjectTitle from '../Util/SubjectTitle/SubjectTitle'
import { useRouter } from 'next/router'
import Button from '../Util/Button/Button'

const hasStringData = (list = ['']): boolean => {
    let result = true

    for (let item of list) {
        if (result && (item == null || item == '')) {
            result = false
        }

    }

    return result
}

const Contact = () => {

    // 画面遷移用宣言
    const router = useRouter()

    const [companyName, setCompanyName] = React.useState('')
    const [name, setName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [mailAddress, setMailAddress] = React.useState('')
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
                setRemarks('')


            }
        })
        setTimeout(() => {
            router.push('/contactDone')
        }, 0);
    }

    return (
        <form className={css.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <SubjectTitle text='お問い合わせ'></SubjectTitle>
            <div className={css.section}>
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
            </div>
            <Button disabled={!hasStringData([companyName, name, phoneNumber, mailAddress, remarks])} type='submit'>送信</Button>
        </form>

    )
}

export default Contact
