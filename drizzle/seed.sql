-- Seed para o Neon (SQL Editor)
-- Clínica: b8750423-e74d-4a69-a6f6-7aa7b9406308
-- Vincula ao usuário da conta: accounts.id = 0pvf9NBoH1MbX9VDUM1TFCcneeP6MzFQ

BEGIN;

-- =========================================================
-- 1) Clínica (id já existente; só insere se não existir)
-- =========================================================

INSERT INTO clinics (id, name)
VALUES ('b8750423-e74d-4a69-a6f6-7aa7b9406308', 'Clínica Vida Saudável')
ON CONFLICT (id) DO NOTHING;

-- =========================================================
-- 2) Vincular ao usuário da conta (accounts.id = 0pvf9NBoH1MbX9VDUM1TFCcneeP6MzFQ)
-- =========================================================

DELETE FROM users_to_clinics
WHERE user_id = (SELECT user_id FROM accounts WHERE id = '0pvf9NBoH1MbX9VDUM1TFCcneeP6MzFQ')
  AND clinic_id = 'b8750423-e74d-4a69-a6f6-7aa7b9406308';

INSERT INTO users_to_clinics (user_id, clinic_id)
SELECT a.user_id, 'b8750423-e74d-4a69-a6f6-7aa7b9406308'
FROM accounts a
WHERE a.id = '0pvf9NBoH1MbX9VDUM1TFCcneeP6MzFQ';

-- =========================================================
-- 3) Médicos
-- =========================================================

INSERT INTO doctors (
  id,
  clinic_id,
  name,
  avatar_image_url,
  available_from_week_day,
  available_to_week_day,
  available_from_time,
  available_to_time,
  specialty,
  appointment_price_in_cents
) VALUES
  (
    '22222222-1111-1111-1111-111111111111',
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    'Dra. Ana Cardoso',
    NULL,
    1,
    5,
    '08:00',
    '17:00',
    'Cardiologia',
    30000
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    'Dr. Bruno Silva',
    NULL,
    1,
    6,
    '09:00',
    '18:00',
    'Ortopedia',
    25000
  )
ON CONFLICT (id) DO NOTHING;

-- =========================================================
-- 4) Pacientes
-- =========================================================

INSERT INTO patients (
  id,
  clinic_id,
  name,
  email,
  phone_number,
  sex
) VALUES
  (
    '33333333-1111-1111-1111-111111111111',
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    'João Pereira',
    'joao.pereira@example.com',
    '+55 11 99999-0001',
    'male'
  ),
  (
    '33333333-2222-2222-2222-222222222222',
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    'Maria Souza',
    'maria.souza@example.com',
    '+55 11 99999-0002',
    'female'
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    'Carlos Lima',
    'carlos.lima@example.com',
    '+55 11 99999-0003',
    'male'
  )
ON CONFLICT (id) DO NOTHING;

-- =========================================================
-- 5) Agendamentos
-- =========================================================

INSERT INTO appointments (
  id,
  date,
  appointment_price_in_cents,
  clinic_id,
  patient_id,
  doctor_id
) VALUES
  (
    '44444444-1111-1111-1111-111111111111',
    TIMESTAMP '2026-02-20 09:00:00',
    30000,
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    '33333333-1111-1111-1111-111111111111',
    '22222222-1111-1111-1111-111111111111'
  ),
  (
    '44444444-1111-1111-1111-222222222222',
    TIMESTAMP '2026-02-25 11:00:00',
    30000,
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    '33333333-2222-2222-2222-222222222222',
    '22222222-1111-1111-1111-111111111111'
  ),
  (
    '44444444-1111-1111-1111-333333333333',
    TIMESTAMP '2026-03-05 15:30:00',
    30000,
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    '33333333-3333-3333-3333-333333333333',
    '22222222-1111-1111-1111-111111111111'
  ),
  (
    '44444444-2222-2222-2222-111111111111',
    TIMESTAMP '2026-02-22 10:00:00',
    25000,
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    '33333333-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222222'
  ),
  (
    '44444444-2222-2222-2222-222222222222',
    TIMESTAMP '2026-02-28 16:00:00',
    25000,
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    '33333333-2222-2222-2222-222222222222',
    '22222222-2222-2222-2222-222222222222'
  ),
  (
    '44444444-2222-2222-2222-333333333333',
    TIMESTAMP '2026-03-10 14:00:00',
    25000,
    'b8750423-e74d-4a69-a6f6-7aa7b9406308',
    '33333333-3333-3333-3333-333333333333',
    '22222222-2222-2222-2222-222222222222'
  )
ON CONFLICT (id) DO NOTHING;

COMMIT;
